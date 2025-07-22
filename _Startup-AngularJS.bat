REM Le cours sur udemy
REM https://mern.udemy.com/course/learn-angularjs/learn/lecture/1669406#overview
REM repo github: https://github.com/jfdesjardins2000/angularjs-sandbox


@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
Set _waitSec=2

REM Obtenir le chemin du dossier contenant ce script
set "root=%~dp0"

REM Nettoyer le \ final si nécessaire (pas obligatoire mais propre)
set "root=%root:~0,-1%"


echo "Ouvrir dossier : MesNOTES"
explorer /e,"C:\Applications\SampleDEV\MesNOTES"
timeout /t %_waitSec% >nul

echo "Ouvrir VSCODE MesNOTES"
start /b code "C:\Applications\SampleDEV\MesNOTES"
timeout /t %_waitSec% >nul



echo "Ouvrir dossier : mon-projet-angularjs"
explorer /e,"%root%\mon-projet-angularjs"
timeout /t %_waitSec% >nul

echo "Ouvrir VSCODE mon projet : mon-projet-angularjs"
start /b code "%root%\mon-projet-angularjs"
timeout /t %_waitSec% >nul







rem ********************** CMDER ********************************
rem Ouvrir cmder qui sera utile pour la gestion github

echo "Ouvrir : cmder.exe"
set "CMDER_PATH=C:\Applications\Software\cmder\Cmder.exe" 
REM Ajustez ce chemin si Cmder est installé ailleurs

start "" "%CMDER_PATH%" /start "%root%\mon-projet-angularjs"
start "" "%CMDER_PATH%" /start "C:\Applications\SampleDEV\MesNOTES"

timeout /t %_waitSec% >nul


rem **************************************************************

exit
