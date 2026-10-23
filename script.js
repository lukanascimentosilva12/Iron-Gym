
const botoesPlanos = document.querySelectorAll("[data-plano]")

botoesPlanos.forEach((botao) => {
    botao.addEventListener("click", () => {
        const plano = botao.dataset.plano;
        console.log(plano);
        const mensagem=`Olá! Tenho interesse em fazer minha matrícula no plano ${plano} da Iron Gym.`;
        const mensagemCodificada=encodeURIComponent(mensagem);
        const numero = "5511999999999";
        const link = `https://wa.me/${numero}?text=${mensagemCodificada}`;
        window.open(link, "_blank");
    });


});

    

const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector(".links");

botaoMenu.addEventListener("click", () => {
menu.classList.toggle("aberto");
});

const formContato = document.querySelector("#formContato");

formContato.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const nome = document.querySelector("#nome").value;

      if (nome === "") {
    alert("Por favor, digite seu nome.");
    return;
}
const email = document.querySelector("#email").value;
if(email===""){
    alert("Por favor, digite seu e-mail")
    return;
}
if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido.");
    return;
}
const mensagem = document.querySelector("#mensagem").value.trim();
if(mensagem===""){
    alert("Digite uma Mensagem")
    return;
    
}
alert("Mensagem enviada com sucesso!");
formContato.reset();

});