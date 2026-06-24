// Anliben Blog - Main Application

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar a pagina apropriada
    if (document.getElementById('posts-list')) {
        initHomePage();
    } else if (document.getElementById('post-content')) {
        initPostPage();
    }
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

