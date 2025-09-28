@echo off
echo Building all three sites...

cd apps\redefinition_tech
echo Building Redefinition Tech...
call "%USERPROFILE%\AppData\Roaming\npm\pnpm.cmd" build
cd ..\..

cd apps\entity_signals  
echo Building Entity Signals...
call "%USERPROFILE%\AppData\Roaming\npm\pnpm.cmd" build
cd ..\..

cd apps\signals_geo
echo Building Signals GEO...
call "%USERPROFILE%\AppData\Roaming\npm\pnpm.cmd" build
cd ..\..

echo All builds complete!
pause

