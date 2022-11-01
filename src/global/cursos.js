const Cursos = [
    {
        nome: 'Fortnite Pro',
        descricao: "Aprenda as melhores e mais recentes estratégias para se tornar um jogador profissional de Fortnite.",
        valor: 196.70,
        img: "https://tecnoblog.net/wp-content/uploads/2021/03/como-mudar-o-nome-no-fortnite.jpg",
        video: "https://www.youtube-nocookie.com/embed/WJW-bzXZM8M?controls=0&amp;start=12",
        categorias: ['maisVendidos', 'videogames']
    },
    {
        nome: 'Imersão GOT',
        descricao: "Fique por dentro de tudo que se passa no universo de Game of Thrones, tornando-se um verdadeiro especialista no assunto.",
        valor: 152.70,
        img: "https://wallpapertops.com/walldb/original/9/8/f/133082.jpg",
        video: "https://www.youtube-nocookie.com/embed/KPLWWIOCOOQ?controls=0",
        categorias: ['maisVendidos', 'series']
    },
    {
        nome: 'Dominando Overwatch',
        descricao: "Aprimore suas habilidades com suas classes preferidas e aprenda como extrair o melhor de cada uma.",
        valor: 128.90,
        img: "https://gamehall.com.br/wp-content/uploads/2016/06/overwatch-all-heroes-wallpaper-hd.jpg",
        video: "https://www.youtube-nocookie.com/embed/LGgqyer-qr4?controls=0&amp;start=14",
        categorias: ['maisVendidos', 'videogames']
    },
    {
        nome: 'Desenvolvimento de Games',
        descricao: "Aprenda a desenvolver seus próprios jogos 2D e 3D e publicá-los no mercado.",
        valor: 186.70,
        img: "https://media.istockphoto.com/vectors/game-dev-isometric-concept-education-of-creation-3d-design-of-or-vector-id1297564630?k=20&m=1297564630&s=612x612&w=0&h=QenkclbeLXqD7NHYdVoBrm3_T4u16fg86CTGMNGdSHQ=",
        video: "https://www.youtube-nocookie.com/embed/d15Xgz_3mUk?controls=0",
        categorias: ['maisVendidos', 'dev']
    },
    {
        nome: 'Youtube Lifestyle',
        descricao: "Descubra tudo que é necessário para viver exclusivamente da sua renda do YouTube.",
        valor: 198.90,
        img: "https://uploads.dailydot.com/2019/08/listen_youtube_music_youtube_premium.jpg?auto=compress&fm=pjpg",
        video: "https://www.youtube-nocookie.com/embed/eLYizanla8A?controls=0",
        categorias: ['maisVendidos', 'marketing']
    },
    {
        nome: 'Marvel: A Saga Definitiva',
        descricao: "Prepare-se para uma imersão no incrível universo da Marvel, e adquira um olhar diferenciado para todos os acontecimentos mais recentes e que ainda virão no UCM.",
        valor: 224.90,
        img: "https://www.mangotree.com.br/wp-content/uploads/2022/02/personagens-da-marvel-wallpaper.jpg",
        video: "https://www.youtube-nocookie.com/embed/6ZfuNTqbHE8?controls=0",
        categorias: ['maisVendidos', 'series']
    },
    {
        nome: 'MERN Stack',
        descricao: "Torne-se um Desenvolvedor Web Full-Stack com as tecnologias mais recentes do mercado utilizando a linguagem de programação JavaScript.",
        valor: 197.90,
        img: "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg",
        video: "https://www.youtube-nocookie.com/embed/jeNXbJq5o5g?controls=0",
        categorias: ['dev']
    },
    {
        nome: 'A Casa do Dragão',
        descricao: 'Desenvende os mistérios da poderosa família Targaryen, e fique por dentro de todas as referências na nova séria da HBO "House of the Dragon".',
        valor: 187.70,
        img: "https://wallpapers.com/images/hd/grazed-red-house-targaryen-erf3txy17qxbn9vq.jpg",
        video: "https://www.youtube-nocookie.com/embed/DotnJ7tTA34?controls=0",
        categorias: ['lancamentos','maisVendidos', 'series']
    },
    {
        nome: 'Sniper DDTank',
        descricao: "Seja no PC ou na versão Mobile, desenvolva as técnicas perfeitas para se tornar um verdadeiro Sniper dentro do game, atingindo os oponentes onde quer que estejam.",
        valor: 145.90,
        img: "https://vistapointe.net/images/ddtank-wallpaper-11.jpg",
        video: "https://www.youtube-nocookie.com/embed/toJdCYxkd5g?controls=0",
        categorias: ['maisVendidos', 'videogames']
    },
    {
        nome: 'Inteligência Artificial para Leigos',
        descricao: "Entre de vez no mundo da Inteligência Artificial e faça com que ela trabalhe para você. Aprenda desde o zero os conceitos que permeiam essa área até projetos práticos usando linguagens de programação.",
        valor: 198.90,
        img: "https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8=",
        video: "https://www.youtube-nocookie.com/embed/c0m6yaGlZh4?controls=0",
        categorias: ['lancamentos', 'dev']
    },
    {
        nome: 'Minecraft: Sistemas Modernos de Redstone',
        descricao: "Aprenda a automizar suas tarefas, aumentar sua mineração e proteger-se de outros players com os sistemas de Redstone mais recentes e funcionais de todo o game.",
        valor: 149.70,
        img: "https://media.forgecdn.net/attachments/271/846/2019-11-20_21.png",
        video: "https://www.youtube-nocookie.com/embed/GrJQH-m2Agc?controls=0",
        categorias: ['maisVendidos','lancamentos', 'videogames']
    },
    {
        nome: 'Rei dos Dofus',
        descricao: "Desvende as profissões mais lucrativas, aprenda a solar mobs e faturar kamas com isso e torne-se imbatível no Koliseu. Os Dofus te esperam.",
        valor: 147.90,
        img: "https://i.pinimg.com/originals/7d/f7/fe/7df7feb84217c5341618112c3734da2a.jpg",
        video: "https://www.youtube-nocookie.com/embed/C10eSD5QqXc?controls=0",
        categorias: ['videogames']
    },
    {
        nome: 'Simplificando Dark Souls',
        descricao: "Faça com que esse desafiador jogo se torne simples perto das habilidades que você irá adquirir com esse curso, passando por mecanismos de combates, estratégias de progressão de fases e coleta de recursos.",
        valor: 167.70,
        img: "https://images5.alphacoders.com/609/609173.jpg",
        video: "https://www.youtube-nocookie.com/embed/cWBwFhUv1-8?controls=0",
        categorias: ['videogames']
    },
    {
        nome: 'Universo Star Wars',
        descricao: "Conheça a fundo cada uma das histórias que se cruzam e caminham juntas nesse infinito universo de Star Wars.",
        valor: 197.90,
        img: "https://wallpaperaccess.com/full/2101913.jpg",
        video: "https://www.youtube-nocookie.com/embed/sGbxmsDFVnE?controls=0",
        categorias: ['lancamentos', 'series']
    },
    {
        nome: 'O Conto de Naruto',
        descricao: "Faça uma verdadeira imersão em Konoha e fique por dentro de todos os acontecimentos do grande mundo ninja, desde o Naruto Clássico até o final de Naruto Shippuden.",
        valor: 159.90,
        img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-naruto-allies-i110116.jpg",
        video: "https://www.youtube-nocookie.com/embed/-G9BqkgZXRA?controls=0",
        categorias: ['series']
    },
    {
        nome: 'Expresso Hogwarts',
        descricao: "Deixe o mundo dos trouxas para trás e embarque nessa jornada de magia, conhecendo a fundo a história de Harry Potter e de todos aqueles que pertencem ao mundo dos bruxos.",
        valor: 157.70,
        img: "https://www.kolpaper.com/wp-content/uploads/2020/12/HD-Harry-Potter-Wallpaper.jpg",
        video: "https://www.youtube-nocookie.com/embed/VyHV0BRtdxo?controls=0",
        categorias: ['series']
    },
    {
        nome: 'Imersão JavaScript',
        descricao: "Começe desde a estaca zero até as funcionalidades mais modernas e funcionais dessa incrível linguagem de programação que revolucionou o mundo da tecnologia.",
        valor: 219.90,
        img: "https://shortpaid.com/wp-content/uploads/2022/03/Javascript-by-SoyHorizonte.jpg",
        video: "https://www.youtube-nocookie.com/embed/nItSSTwBvSU?controls=0",
        categorias: ['maisVendidos', 'dev']
    },
    {
        nome: 'Desvendando a Blockchain',
        descricao: "Fique por dentro da mesma tecnologia que trouxe à tona o Bitcoin e crie seus próprios projetos NFT, Criptos e muito mais.",
        valor: 199.90,
        img: "https://thumbs.dreamstime.com/b/abstract-blockchain-wallpaper-abstract-glowing-blockchain-wallpaper-cryptocurrency-payment-finance-online-banking-concept-d-113558704.jpg",
        video: "https://www.youtube-nocookie.com/embed/sTFZras-1Lo?controls=0",
        categorias: ['lancamentos', 'dev']
    },
    {
        nome: 'Desenvolvimento de Aplicativos',
        descricao: "Crie aplicativos nativos e de alta performance para Android e iOS com projetos práticos do começo ao fim.",
        valor: 189.90,
        img: "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1600,h_686/https://www.silvertouch.com/wp-content/themes/silvertouch/assets/images-2020/mobile-2-banner.jpg",
        video: "https://www.youtube-nocookie.com/embed/lJVc2icZk38?controls=0",
        categorias: ['lancamentos', 'dev']
    },
];

export default Cursos;