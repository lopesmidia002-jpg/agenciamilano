@echo off
echo Iniciando Agência Milano no Docker...
docker compose up -d --build
echo.
echo ========================================================
echo  Agência Milano rodando com sucesso no Docker!
echo  Acesse em: http://localhost:8080
echo ========================================================
pause
