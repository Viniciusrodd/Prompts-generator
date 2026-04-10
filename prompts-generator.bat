@echo off
echo.
echo Iniciando servidor com nodemon...
cd /d "C:\Users\alfa\Documents\Estudos\Prompts-generator"

:: Iniciar o servidor em segundo plano
start "" nodemon index.js

:: Aguardar um pouco para o servidor inicializar
timeout /t 3 /nobreak >nul

:: Abrir o navegador no endereço do servidor
echo Abrindo navegador em: http://localhost:4550/homepage
start "" "http://localhost:4550/homepage"

echo.
echo Pressione Ctrl+C no terminal para parar o servidor
echo.
pause