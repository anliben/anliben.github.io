// Posts do Blog Anliben
// Adicione novos posts ao inicio do array (mais recentes primeiro)

const BLOG_POSTS = [
    {
        id: "cafe-preto",
        title: "O Efeito Cafe Preto",
        subtitle: "Por que focar no que voce nao quer so atrai mais do mesmo",
        date: "2025-02-01",
        content: `
            <p>Esse conceito reprogramou completamente meu cerebro e eu precisava compartilhar com voces.</p>

            <p>Imagine que voce entra em uma cafeteria.</p>

            <p>Voce quer um latte.</p>

            <p>Mas, em vez de pedir um latte, voce diz ao barista:</p>

            <p><em>"Eu realmente nao quero um cafe preto."</em></p>

            <p>Ele te olha, confuso.</p>

            <p><em>"Ok... mas o que voce quer entao?"</em></p>

            <p>E voce responde:</p>

            <p><em>"Eu so sei que definitivamente nao quero cafe preto."</em></p>

            <p>O barista sai confuso.</p>

            <p>Dez minutos depois, ele esta preparando os pedidos e tentando lembrar o seu.</p>

            <p>Qual e a unica coisa que ele consegue lembrar?</p>

            <p><strong>Cafe preto.</strong></p>

            <p>Adivinha o que chega na sua mesa?</p>

            <div class="separator">...</div>

            <p>E assim que a maioria das pessoas esta vivendo a propria vida:</p>

            <p><em>"Eu nao quero um relacionamento toxico."</em></p>

            <p><em>"Eu nao quero me sentir invisivel."</em></p>

            <p><em>"Eu nao quero viver estressado por causa de dinheiro."</em></p>

            <p>Mas isso nao e uma visao.</p>

            <p><strong>Isso e apenas resistencia.</strong></p>

            <p>Voce nao esta pedindo o que quer.</p>

            <p>Voce esta apenas rejeitando em voz alta aquilo que nao quer.</p>

            <p>E o universo escuta aquilo em que voce foca, nao aquilo de que voce esta tentando fugir.</p>

            <p>Se voce esta constantemente pensando no que nao funciona, no que esta faltando, no que esta dando errado...</p>

            <p><strong>Voce esta reforcando isso.</strong></p>

            <p>Mesmo quando acredita que esta fazendo o oposto.</p>

            <div class="separator">...</div>

            <p>Pare de tentar fugir do que voce nao quer.</p>

            <p><strong>Seja especifico sobre o que voce QUER.</strong></p>

            <p>Diga em voz alta.</p>

            <p>Assuma.</p>

            <p>Caminhe em direcao a isso.</p>

            <p><span class="highlight">"Eu quero ser altamente visivel"</span> vai te levar muito mais longe do que: <em>"Eu nao quero ser ignorado."</em></p>

            <p><span class="highlight">"Eu estou pronto para manifestar um fluxo abundante de renda"</span> vai te levar muito mais longe do que: <em>"Eu estou cansado de estar quebrado."</em></p>

            <div class="separator">...</div>

            <p><strong>O universo nao esta confuso.</strong></p>

            <p>Mas se o seu pedido estiver confuso, voce vai receber cafe preto todas as vezes.</p>
        `
    }
];

// Funcao para formatar data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', options);
}

// Funcao para obter post por ID
function getPostById(id) {
    return BLOG_POSTS.find(post => post.id === id);
}

// Funcao para obter todos os posts
function getAllPosts() {
    return BLOG_POSTS;
}
