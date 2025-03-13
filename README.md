### node-pm2-reload-action

```bash
Crie uma api para executar a função reload em reload.js
```

```bash
child_process e path são nativos do node não é necessario instalar nenhuma lib
```

- Para windows crie um arquivo .bat ou .ps1 como nos exemplos abaixo
```bash
@echo off
echo Run new PM2 reload action
pm2 reload index.js
pause
```
Explicação:
@echo off: Oculta a exibição dos comandos no terminal.
echo Run new PM2 reload action: Exibe a mensagem antes da execução.
pm2 reload index.js: Executa o comando para recarregar o processo no PM2.
pause: Mantém o terminal aberto até que o usuário pressione uma tecla.

Se preferir usar PowerShell, crie um arquivo .ps1 com o seguinte conteúdo:
```bash
Write-Output "Run new PM2 reload action"
pm2 reload index.js
```

Para rodar o script .ps1, talvez seja necessário permitir a 
execução de scripts no PowerShell com o seguinte comando:
```bash
Set-ExecutionPolicy Unrestricted -Scope Process
```

