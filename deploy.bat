title GIT�ύ����������δ�����
color 02
cls
@echo off
echo *************************************************************
echo *                GIT �����ύ������                         
echo *                 Author: δ�����    
echo *************************************************************

echo;
echo ������Ϣ
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ��ǰĿ¼�ǣ�%cd%
echo;
echo git�汾
git --version
echo;


echo Run--- git add -A .
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
git add -A .
echo success add
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo;


echo;
echo �ύ��������زֿ�---git commit
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
@echo off
set /p var=�������ύ˵��: 
echo ��������ύ˵��Ϊ��  %var%
echo;
git commit -m %var%
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

echo;
echo;
echo;
echo �ύ��Զ��git������--->git push
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
git push
echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ������ִ����ϣ�
echo;

pause