// Posts do Blog Anliben
// Adicione novos posts ao início do array (mais recentes primeiro)

const BLOG_POSTS = [
    {
        id: "cafe-preto",
        title: "O Efeito Café Preto",
        subtitle: "Por que focar no que você não quer só atrai mais do mesmo",
        date: "2025-02-01",
        content: `
            <p>Esse conceito reprogramou completamente meu cérebro e eu precisava compartilhar com vocês.</p>

            <p>Imagine que você entra em uma cafeteria.</p>

            <p>Você quer um latte.</p>

            <p>Mas, em vez de pedir um latte, você diz ao barista:</p>

            <p><em>"Eu realmente não quero um café preto."</em></p>

            <p>Ele te olha, confuso.</p>

            <p><em>"Ok... mas o que você quer então?"</em></p>

            <p>E você responde:</p>

            <p><em>"Eu só sei que definitivamente não quero café preto."</em></p>

            <p>O barista sai confuso.</p>

            <p>Dez minutos depois, ele está preparando os pedidos e tentando lembrar o seu.</p>

            <p>Qual é a única coisa que ele consegue lembrar?</p>

            <p><strong>Café preto.</strong></p>

            <p>Adivinha o que chega na sua mesa?</p>

            <div class="separator">...</div>

            <p>É assim que a maioria das pessoas está vivendo a própria vida:</p>

            <p><em>"Eu não quero um relacionamento tóxico."</em></p>

            <p><em>"Eu não quero me sentir invisível."</em></p>

            <p><em>"Eu não quero viver estressado por causa de dinheiro."</em></p>

            <p>Mas isso não é uma visão.</p>

            <p><strong>Isso é apenas resistência.</strong></p>

            <p>Você não está pedindo o que quer.</p>

            <p>Você está apenas rejeitando em voz alta aquilo que não quer.</p>

            <p>E o universo escuta aquilo em que você foca, não aquilo de que você está tentando fugir.</p>

            <p>Se você está constantemente pensando no que não funciona, no que está faltando, no que está dando errado...</p>

            <p><strong>Você está reforçando isso.</strong></p>

            <p>Mesmo quando acredita que está fazendo o oposto.</p>

            <div class="separator">...</div>

            <p>Pare de tentar fugir do que você não quer.</p>

            <p><strong>Seja específico sobre o que você QUER.</strong></p>

            <p>Diga em voz alta.</p>

            <p>Assuma.</p>

            <p>Caminhe em direção a isso.</p>

            <p><span class="highlight">"Eu quero ser altamente visível"</span> vai te levar muito mais longe do que: <em>"Eu não quero ser ignorado."</em></p>

            <p><span class="highlight">"Eu estou pronto para manifestar um fluxo abundante de renda"</span> vai te levar muito mais longe do que: <em>"Eu estou cansado de estar quebrado."</em></p>

            <div class="separator">...</div>

            <p><strong>O universo não está confuso.</strong></p>

            <p>Mas se o seu pedido estiver confuso, você vai receber café preto todas as vezes.</p>
        `
    }
];

// Função para formatar data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', options);
}

// Função para obter post por ID
function getPostById(id) {
    return BLOG_POSTS.find(post => post.id === id);
}

// Função para obter todos os posts
function getAllPosts() {
    return BLOG_POSTS;
}
