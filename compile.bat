@echo off
cd C:\Users\antonio.pinel\Documents\GitHub\SIFO\
pause
for /f %%f in ('dir /b C:\Users\antonio.pinel\Documents\GitHub\SIFO\libs\sifojs\packages\%*') do (
	C:\Ruby193\bin\juicer.bat merge "libs/sifojs/packages/%%f" --o libs/sifojs/assets/%%f -s --force
	pause
)
