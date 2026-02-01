// Anliben Blog - Main Application

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar a pagina apropriada
    if (document.getElementById('posts-list')) {
        initHomePage();
    } else if (document.getElementById('post-content')) {
        initPostPage();
    }

    // Inicializar formulario de inscricao
    initSubscribeForm();
});

// ================================
// Pagina Inicial
// ================================
function initHomePage() {
    const postsContainer = document.getElementById('posts-list');
    const posts = getAllPosts();

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p class="no-posts">Nenhuma publicacao ainda.</p>';
        return;
    }

    postsContainer.innerHTML = posts.map(post => createPostCard(post)).join('');
}

function createPostCard(post) {
    return `
        <a href="post.html?id=${post.id}" class="post-card">
            <h3 class="post-card-title">${post.title}</h3>
            <p class="post-card-subtitle">${post.subtitle}</p>
            <div class="post-card-meta">
                <span>Por Anliben</span>
                <span>${formatDate(post.date)}</span>
            </div>
        </a>
    `;
}

// ================================
// Pagina de Post Individual
// ================================
function initPostPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        showPostError();
        return;
    }

    const post = getPostById(postId);

    if (!post) {
        showPostError();
        return;
    }

    // Atualizar titulo da pagina
    document.title = `${post.title} - Anliben`;

    // Preencher conteudo
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-subtitle').textContent = post.subtitle;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-content').innerHTML = post.content;
}

function showPostError() {
    const contentEl = document.getElementById('post-content');
    document.getElementById('post-title').textContent = 'Post nao encontrado';
    document.getElementById('post-subtitle').textContent = '';
    document.getElementById('post-date').textContent = '';
    contentEl.innerHTML = '<p>Desculpe, este post nao foi encontrado. <a href="index.html">Voltar para o inicio</a>.</p>';
}

// ================================
// Formulario de Inscricao
// ================================
function initSubscribeForm() {
    const form = document.getElementById('subscribe-form');
    if (!form) return;

    form.addEventListener('submit', handleSubscribe);
}

async function handleSubscribe(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input');
    const submitBtn = document.getElementById('subscribe-btn');
    const messageEl = document.getElementById('form-message');
    const email = emailInput.value.trim();

    if (!email) {
        showFormMessage('Por favor, insira seu email.', 'error');
        return;
    }

    // Desabilitar botao durante envio
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    messageEl.textContent = '';
    messageEl.className = 'form-message';

    try {
        const response = await fetch('https://n8n.evolars.com.br/webhook/86ef4e0c-15b6-4c4c-9792-7596119e519f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            })
        });

        if (response.ok) {
            showFormMessage('Inscricao realizada com sucesso! Obrigado.', 'success');
            emailInput.value = '';
        } else {
            showFormMessage('Erro ao inscrever. Tente novamente.', 'error');
        }
    } catch (error) {
        console.error('Erro na inscricao:', error);
        showFormMessage('Erro ao inscrever. Tente novamente.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Inscrever';
    }
}

function showFormMessage(message, type) {
    const messageEl = document.getElementById('form-message');
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
}
