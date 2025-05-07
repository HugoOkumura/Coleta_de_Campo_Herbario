# Instruções para Contribuir para o projeto.

<ol>
<li> Clone o repositório: <br>
>   git clone https://github.com/HugoOkumura/Coleta_de_Campo_Herbario.git 

<li> Puxe todas as branches do projeto:
    exemplo de como fazer: <a href="https://phoenixnap.com/kb/git-pull-all-branches">phoenixNAP</a>

<li> vá para a branch develop: <br>
>   git checkout develop

<li> cria uma branch a partir dela: <br>
>   git checkout -b nome_da_branch

<li> Toda issue deve ser feita uma branch a partir da branch develop e os pull requests devem ser feitas também para a develop
</ol>


# Instruções para testar o projeto

<ol>
<li> Abra um terminal no diretório raiz do projeto e execute o comando: <br>
>   docker compose up -d <br>
Este comando irá montar o projeto completo (back e front) no docker
<li> Se quiser abrir apenas um dos dois basta adicionar no comando os argumentos "frontend" ou "backend": <br>
>   docker compose up frontend -d <br>
>   docker compose up backend -d    <br>
<li> Se quiser finalizar os processo execute o comando: <br>
>   docker compose down
</ol>

# Instruções para acessar o Banco pelo Docker 

<ol>
<li> Abra um terminal com o do ligado na sua branch do projeto e execute o comando: <br>
>   docker run -it --rm postgres psql -h host.docker.internal -p 5433 -U postgres -d herbario
 <br>
Este comando irá abrir o terminal de sql do Postgres dentro do docker 
A senha do banco é : postgres
</ol>