/**
 * AGÊNCIA MILANO - INTERACTION CONTROLLER & MOBILE-FIRST SCRIPTS
 * Assessoria de Marketing & Performance Médico
 */

document.addEventListener('DOMContentLoaded', () => {


  /* ==========================================================================
     2. Pain Cards & Advantage Cards Interactive Activation (Hover Only, No Click Lock)
     Matching CARD-HOVER01.png & CARD-HOVER02.png
     ========================================================================== */
  const allPainCards = document.querySelectorAll('.pain-card');
  
  function clearAllActivePainCards() {
    allPainCards.forEach(c => c.classList.remove('active'));
  }

  // Clear any active state initially so all cards start in neutral state
  clearAllActivePainCards();

  allPainCards.forEach(card => {
    const onEnter = () => {
      const parentGrid = card.closest('.pain-cards-grid, .advantages-grid') || card.parentElement;
      if (parentGrid) {
        parentGrid.querySelectorAll('.pain-card').forEach(c => {
          if (c !== card) c.classList.remove('active');
        });
      }
      card.classList.add('active');
    };

    const onLeave = () => {
      card.classList.remove('active');
    };

    // Instant hover/pointer interaction across desktop and mobile emulation
    card.addEventListener('mouseenter', onEnter, { passive: true });
    card.addEventListener('mouseleave', onLeave, { passive: true });
    card.addEventListener('pointerenter', onEnter, { passive: true });
    card.addEventListener('pointerleave', onLeave, { passive: true });
    card.addEventListener('mouseover', onEnter, { passive: true });
    card.addEventListener('mouseout', (e) => {
      if (!card.contains(e.relatedTarget)) {
        onLeave();
      }
    }, { passive: true });
    card.addEventListener('touchstart', onEnter, { passive: true });

    // Explicitly do nothing on click - no click mode or persistent lock
    card.addEventListener('click', () => {
      card.blur();
    });
  });

  // Track cursor and touch continuously across viewport (works in DevTools mobile mode and touchscreens)
  function handleCursorPosition(clientX, clientY) {
    if (clientX === undefined || clientY === undefined) return;
    const el = document.elementFromPoint(clientX, clientY);
    const card = el ? el.closest('.pain-card') : null;
    if (card) {
      allPainCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.add('active');
    } else {
      clearAllActivePainCards();
    }
  }

  document.addEventListener('mousemove', (e) => {
    handleCursorPosition(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    handleCursorPosition(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handleCursorPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      handleCursorPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // When cursor leaves window or page loses focus, clear active states
  document.addEventListener('mouseleave', clearAllActivePainCards, { passive: true });
  window.addEventListener('blur', clearAllActivePainCards, { passive: true });

  /* ==========================================================================
     3. Interactive 3-Stage Dial for "Método Agenda Cheia"
     Matching METODO01.png, METODO02.png, METODO03.png
     ========================================================================== */
  const stageData = {
    1: {
      badge: "ALCANCE",
      hubHeading: "O paciente certo encontra você",
      eyebrow: "ETAPA 01 DE 03",
      title: "Alcance",
      tagline: "O paciente certo encontra você",
      desc: "Anúncios no Meta e no Google, Google Meu Negócio e reputação digital para encontrar o paciente particular da sua região.",
      dashOffset: 338
    },
    2: {
      badge: "AUTORIDADE",
      hubHeading: "Ele entende por que escolher você",
      eyebrow: "ETAPA 02 DE 03",
      title: "Autoridade",
      tagline: "Ele entende por que escolher você",
      desc: "Posicionamento, linha editorial, roteiros prontos e vídeos editados mostrando o especialista que você é.",
      dashOffset: 202
    },
    3: {
      badge: "AGENDAMENTO",
      hubHeading: "O interesse vira horário marcado",
      eyebrow: "ETAPA 03 DE 03",
      title: "Agendamento",
      tagline: "O interesse vira horário marcado",
      desc: "Estratégia comercial: scripts para a secretária, CRM com cada conversa acompanhada e campanhas de vendas.",
      dashOffset: 0
    }
  };

  const stageNodes = document.querySelectorAll('.stage-node');
  const stageIndicators = document.querySelectorAll('.indicator-bar');
  const dialHubBadge = document.getElementById('dialHubBadge');
  const dialHubHeading = document.getElementById('dialHubHeading');
  const stageStepEyebrow = document.getElementById('stageStepEyebrow');
  const stageStepTitle = document.getElementById('stageStepTitle');
  const stageStepTagline = document.getElementById('stageStepTagline');
  const stageStepDesc = document.getElementById('stageStepDesc');
  const dialProgressRing = document.getElementById('dialProgressRing');

  let currentStage = 1;
  let stageAutoTimer = null;
  let userInteractedTimeout = null;

  function updateProgressRing(dashOffset) {
    if (!dialProgressRing) return;
    dialProgressRing.style.strokeDashoffset = String(dashOffset);
    dialProgressRing.setAttribute('stroke-dashoffset', String(dashOffset));
  }

  function setStage(stageId, isUserInteraction = false) {
    const stageNum = parseInt(stageId, 10);
    const data = stageData[stageNum];
    if (!data) return;

    currentStage = stageNum;

    // Immediately animate SVG progress ring stroke
    updateProgressRing(data.dashOffset);

    // Update active node
    stageNodes.forEach(node => {
      if (node.getAttribute('data-stage') === String(stageNum)) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    // Update indicators
    stageIndicators.forEach(ind => {
      if (ind.getAttribute('data-stage') === String(stageNum)) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });

    // Animate text changes
    [dialHubBadge, dialHubHeading, stageStepEyebrow, stageStepTitle, stageStepTagline, stageStepDesc].forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(6px)';
        el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      }
    });

    setTimeout(() => {
      if (dialHubBadge) dialHubBadge.textContent = data.badge;
      if (dialHubHeading) dialHubHeading.textContent = data.hubHeading;
      if (stageStepEyebrow) stageStepEyebrow.textContent = data.eyebrow;
      if (stageStepTitle) stageStepTitle.textContent = data.title;
      if (stageStepTagline) stageStepTagline.textContent = data.tagline;
      if (stageStepDesc) stageStepDesc.textContent = data.desc;

      [dialHubBadge, dialHubHeading, stageStepEyebrow, stageStepTitle, stageStepTagline, stageStepDesc].forEach(el => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, 180);

    if (isUserInteraction) {
      pauseAutoTimerTemporarily();
    }
  }

  function nextStage() {
    let next = currentStage + 1;
    if (next > 3) next = 1;
    setStage(next, false);
  }

  function startAutoCycle() {
    stopAutoCycle();
    stageAutoTimer = setInterval(nextStage, 4200);
  }

  function stopAutoCycle() {
    if (stageAutoTimer) {
      clearInterval(stageAutoTimer);
      stageAutoTimer = null;
    }
  }

  function pauseAutoTimerTemporarily() {
    stopAutoCycle();
    if (userInteractedTimeout) clearTimeout(userInteractedTimeout);
    userInteractedTimeout = setTimeout(() => {
      startAutoCycle();
    }, 8000);
  }

  stageNodes.forEach(node => {
    node.addEventListener('click', () => {
      const stage = node.getAttribute('data-stage');
      setStage(stage, true);
    });
  });

  stageIndicators.forEach(ind => {
    ind.addEventListener('click', () => {
      const stage = ind.getAttribute('data-stage');
      setStage(stage, true);
    });
  });

  const dialContainer = document.querySelector('.dial-container');
  const stageInfoPanel = document.querySelector('.stage-info-panel');
  [dialContainer, stageInfoPanel].forEach(el => {
    if (el) {
      el.addEventListener('mouseenter', stopAutoCycle);
      el.addEventListener('mouseleave', () => {
        if (!userInteractedTimeout) startAutoCycle();
      });
    }
  });

  // Initialize stage 1 on page load
  setStage(1, false);
  startAutoCycle();

  /* ==========================================================================
     4. Cases Carousel & Dynamic Category Filter
     Matching CASE01.png to CASE04.png
     ========================================================================== */
  const filterPills = document.querySelectorAll('.filter-pill');
  const casesTrack = document.getElementById('casesTrack');
  const caseCards = document.querySelectorAll('.case-card');
  const casePrevBtn = document.getElementById('casePrevBtn');
  const caseNextBtn = document.getElementById('caseNextBtn');

  // Filter Categories
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');

      caseCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'todos' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });

      // Scroll to start of track
      if (casesTrack) {
        casesTrack.scrollTo({ left: 0, behavior: 'smooth' });
      }
    });
  });

  // Carousel Arrow Navigation
  if (casesTrack && casePrevBtn && caseNextBtn) {
    caseNextBtn.addEventListener('click', () => {
      const card = casesTrack.querySelector('.case-card');
      const cardWidth = card ? card.offsetWidth + 18 : 310;
      const scrollStep = window.innerWidth >= 1024 ? cardWidth * 2 : cardWidth;
      casesTrack.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    casePrevBtn.addEventListener('click', () => {
      const card = casesTrack.querySelector('.case-card');
      const cardWidth = card ? card.offsetWidth + 18 : 310;
      const scrollStep = window.innerWidth >= 1024 ? cardWidth * 2 : cardWidth;
      casesTrack.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
  }

  // Touch Swipe Gesture Support for Carousel (Mobile)
  if (casesTrack) {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    casesTrack.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - casesTrack.offsetLeft;
      scrollLeft = casesTrack.scrollLeft;
    }, { passive: true });

    casesTrack.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - casesTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      casesTrack.scrollLeft = scrollLeft - walk;
    }, { passive: true });

    casesTrack.addEventListener('touchend', () => {
      isDown = false;
    });
  }

  /* ==========================================================================
     5. FAQ Accordion (10 Questions from Dúvidas frequentes.txt)
     ========================================================================== */
  const faqItems = document.querySelectorAll('[data-faq-item]');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Initialize already active FAQ item (Question 1 open matching reference layout)
  const syncActiveFaqHeight = () => {
    faqItems.forEach(item => {
      if (item.classList.contains('active')) {
        const panel = item.querySelector('.faq-answer-panel');
        const btn = item.querySelector('.faq-question-btn');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
        if (btn) btn.setAttribute('aria-expanded', 'true');
      }
    });
  };

  syncActiveFaqHeight();
  window.addEventListener('resize', syncActiveFaqHeight);
  if (document.fonts) {
    document.fonts.ready.then(syncActiveFaqHeight);
  }



  /* ==========================================================================
     6. Phone / WhatsApp Input Mask: (11) 98765-4321
     ========================================================================== */
  const phoneInput = document.getElementById('whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.substring(0, 11);

      if (val.length > 10) {
        // (XX) XXXXX-XXXX
        val = val.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (val.length > 6) {
        // (XX) XXXX-XXXX
        val = val.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (val.length > 2) {
        // (XX) XXXX
        val = val.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (val.length > 0) {
        val = val.replace(/^(\d*)$/, '($1');
      }
      e.target.value = val;
    });
  }

  /* ==========================================================================
     7. Lead Form Submission & Toast Notification
     ========================================================================== */
  const leadForm = document.getElementById('leadForm');
  const toastNotification = document.getElementById('toastNotification');

  function showToast(message, isSuccess = true) {
    if (!toastNotification) return;
    if (message) {
      const msgEl = toastNotification.querySelector('.toast-msg');
      if (msgEl) msgEl.textContent = message;
    }
    toastNotification.classList.add('active');
    setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 5500);
  }

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome')?.value || '';
      const whatsapp = document.getElementById('whatsapp')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const especialidade = document.getElementById('especialidade')?.value || '';
      const cargo = document.getElementById('cargo')?.value || '';
      const atendimento = document.querySelector('input[name="atendimento_particular"]:checked')?.value || 'Sim';
      const faturamento = document.getElementById('faturamento')?.value || 'Não informado';

      // Submit feedback button state
      const submitBtn = leadForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Agendando...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast(`Obrigado, Dr(a). ${nome}! Sua solicitação foi recebida. Entraremos em contato via WhatsApp em minutos.`);
        leadForm.reset();

        // Optional WhatsApp pre-fill redirect
        const cleanPhone = whatsapp.replace(/\D/g, '');
        const waMsg = encodeURIComponent(
          `Olá! Sou ${nome}, especialista em ${especialidade}. Gostaria de agendar a reunião estratégica da minha clínica com a Milano.`
        );
        const waUrl = `https://wa.me/5511999999999?text=${waMsg}`;
        
        // Open WhatsApp in new tab after 1.5s
        setTimeout(() => {
          window.open(waUrl, '_blank');
        }, 1500);

      }, 1000);
    });
  }



  /* ==========================================================================
     9. Smooth Scrolling Anchor Links
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
