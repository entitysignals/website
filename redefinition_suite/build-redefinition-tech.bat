@echo off
echo Building Redefinition Tech...
cd apps\redefinition_tech
call "%USERPROFILE%\AppData\Roaming\npm\pnpm.cmd" build
echo Build complete!
pause

