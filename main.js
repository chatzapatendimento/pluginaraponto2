<script>
    document.addEventListener('DOMContentLoaded', () => {
    // Selecionar os elementos do chat
    const chatChamada = document.getElementById('chat-call'); // Chat de Chamada
    const chatJa = document.getElementById('chat-now'); // Chat Já
    const profileContainer = document.querySelector('.profbvreile-container'); // Apenas o avatar
    const chatBubble = document.querySelector('.chat-bubble'); // Balão de mensagem no Chat Call
const startChatCallSequence = () => {
    // Passo 1: Mostrar avatar e bolha de digitação
    if (chatBubble) {
        chatBubble.innerHTML = `
            <div class="typing-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        `;
    }

    // Passo 2: Após 3 segundos, substituir bolha pela mensagem
    setTimeout(() => {
        if (chatBubble) {
            chatBubble.innerHTML = `
                <p>
                    Quer <strong>Começar</strong> seu <strong>Teste Grátis</strong> da Plataforma? 
                    <span class="emoji">😄</span>
                </p>
            `;
        }
    }, 3000); // Troca após 3 segundos
};

startChatCallSequence();


// Substituir o showChatCall() pelo startChatCallSequence()
startChatCallSequence();



    // Selecionar elementos do Chat Já
    const typingBubble1 = document.getElementById('typing-bubble');
    const message1 = document.getElementById('message-1');
    const typingBubble2 = document.getElementById('typing-bubble-2');
    const message2 = document.getElementById('message-2');

    // Controle de interação do usuário
    let userInteracted = false;

    // Detectar qualquer clique para registrar interação
    document.addEventListener('click', () => {
        userInteracted = true;
    });

    // Função para exibir o Chat Call completo (avatar + mensagem)
    const showChatCall = () => {
        if (chatChamada) {
            chatChamada.style.display = 'flex'; // Exibe o Chat Call
        }
        if (chatBubble) {
            chatBubble.style.display = 'flex'; // Exibe o balão de mensagem
        }
    };

    // Função para exibir apenas o avatar
    const showAvatarOnly = () => {
        if (profileContainer) {
            profileContainer.style.display = 'flex'; // Exibe o avatar
        }
        if (chatBubble) {
            chatBubble.style.display = 'none'; // Oculta o balão de mensagem
        }
        if (chatChamada) {
            chatChamada.style.display = 'flex'; // Garante que o Chat Call esteja visível
        }
    };

    // Função para exibir o Chat Já
const showChatJa = () => {
    if (chatChamada) {
        chatChamada.style.display = 'none'; // Esconde o Chat de Chamada
    }
    if (chatJa) {
        chatJa.style.display = 'flex'; // Exibe o Chat Já

        if (!isSecondCycle) {
            // Primeiro ciclo
            if (!isChatSequenceStarted) {
                console.log("Primeiro ciclo: exibindo animação de digitação");
                startChatSequence(); // Apenas no primeiro ciclo
                isChatSequenceStarted = true; // Marca que a sequência foi iniciada
            }
        } else {
            // Ciclos subsequentes
            console.log("Ciclo subsequente: exibindo mensagens diretamente");
            showChatNowWithoutTyping(); // Exibe mensagens diretamente
        }
    }
};




    // Sequência de mensagens no Chat Já
    const startChatSequence = () => {
        setTimeout(() => {
            if (typingBubble1) typingBubble1.style.display = 'flex'; // Mostra a primeira bolha de digitação
        }, 500); // 0.5 segundos

        setTimeout(() => {
            if (typingBubble1) typingBubble1.style.display = 'none'; // Esconde a bolha
            if (message1) message1.style.display = 'flex'; // Mostra a primeira mensagem
        }, 1500); // 1 segundo depois

        setTimeout(() => {
            if (typingBubble2) typingBubble2.style.display = 'flex'; // Mostra a segunda bolha de digitação
        }, 2000); // 0.5 segundos depois

        setTimeout(() => {
            if (typingBubble2) typingBubble2.style.display = 'none'; // Esconde a bolha
            if (message2) message2.style.display = 'block'; // Mostra a mensagem de oferta
        }, 3000); // 1 segundo depois
    };

    // Exibir o Chat Call (avatar + mensagem) inicialmente
    startChatCallSequence();

    // Após 20 segundos, exibir o Chat Já se não houver interação
    setTimeout(() => {
        if (!userInteracted) {
            showChatJa(); // Exibe o Chat Já
        }
    }, 20000); // 20 segundos

// Botão de fechar no Chat Já
let isSecondCycle = false; // Flag para identificar ciclos após o primeiro
let isChatSequenceStarted = false; // Flag para evitar que a sequência de digitação seja iniciada duas vezes

const closeButton = document.querySelector('.close-btn');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        console.log("Botão de fechar clicado!");

        // Esconde o Chat Já
        if (chatJa) {
            chatJa.style.display = 'none'; // Esconde o Chat Now
        }

        // Exibe apenas o avatar do Chat Call
        if (profileContainer) {
            profileContainer.style.display = 'flex'; // Mostra apenas o avatar
        }
        if (chatBubble) {
            chatBubble.style.display = 'none'; // Esconde o balão de mensagem
        }
        if (chatChamada) {
            chatChamada.style.display = 'flex'; // Garante que o container do Chat Call esteja visível
        }

        // Após 40 segundos, exibir o Chat Now novamente (ajustado para ciclos)
        setTimeout(() => {
            console.log("Reabrindo Chat Now...");
            if (!isSecondCycle) {
                // Primeiro ciclo: exibe mensagem no Chat Call antes de abrir o Chat Now
                if (chatChamada) {
                    chatChamada.style.display = 'flex'; // Exibe o Chat Call
                }
                if (chatBubble) {
                    chatBubble.style.display = 'flex'; // Mostra o balão de mensagem
                }

                // Após 20 segundos, abre o Chat Now com animação
                setTimeout(() => {
                    console.log("Abrindo Chat Now após mensagem do Chat Call...");
                    showChatJa(); // Exibe o Chat Now com animação
                    isSecondCycle = true; // Marca como segundo ciclo
                }, 20000); // 20 segundos após o balão de mensagem
            } else {
                // Ciclos seguintes: abre o Chat Now direto com mensagens
                showChatNowWithoutTyping(); // Exibe o Chat Now diretamente com mensagens
            }
        }, 40000); // 40 segundos para reabrir o Chat Now
    });
}

// Função para exibir o Chat Now diretamente sem digitação
const showChatNowWithoutTyping = () => {
    if (chatJa) {
        chatJa.style.display = 'flex'; // Exibe o Chat Now

        // Garante que as bolhas de digitação estejam ocultas
        if (typingBubble1) typingBubble1.style.display = 'none';
        if (typingBubble2) typingBubble2.style.display = 'none';

        // Mostra as mensagens diretamente
        if (message1) {
            message1.style.display = 'flex';
        }
        if (message2) {
            message2.style.display = 'block';
        }
    }
};


// Exibir o Chat Já se não houver interação após 20 segundos
setTimeout(() => {
    if (!userInteracted) {
        showChatJa(); // Exibe o Chat Já
    }
}, 20000); // 20 segundos



    // Função para inicializar o Typebot e abrir diretamente
    const initializeTypebot = () => {
        if (window.Typebot) {
            console.log("Inicializando Typebot...");
            Typebot.initBubble({
                typebot: "lead-magnet-3a9mx2z", // Substitua pelo seu ID do Typebot
                theme: {
                    button: {
                        backgroundColor: "#075E54",
                        customIconSrc: "https://s3.typebot.io/public/workspaces/cm1phfshl003t3eii8w05yvqa/typebots/cm2uxrjgl000114hkqz5xo2ta/blocks/phehu4kfk6fvxk7f0qr2h17y?v=1734639126382",
                        size: "large"
                    }
                },
            });
            Typebot.open();
            document.body.classList.add('typebot-active'); // Adiciona classe para ocultar outros chats
        } else {
            console.error("Typebot não está disponível no momento.");
        }
    };
// Adicionar evento de clique ao Chat Call para abrir o Typebot
if (chatChamada) {
    chatChamada.addEventListener('click', () => {
        console.log("Chat Call clicado! Redirecionando para o novo link...");
        window.location.href = 'https://chatzapatendimento.github.io/minichatneurologic/'; // Substitua pelo link desejado
    });
}

    // Botão "Sim, começar agora" para inicializar o Typebot
 
        // Seleção do botão "Sim, testar agora"
        const testNowButton = document.querySelector('.start-btn'); // Certifique-se de que o botão possui a classe .start-btn

        if (testNowButton) {
            testNowButton.addEventListener('click', () => {
                console.log("Botão 'Sim, testar agora' clicado!");
                window.location.href = 'https://chatzapatendimento.github.io/minichatneurologic/'; // Link do Typebot
            });
        }


    // Restaurar comportamento após fechar o Typebot
    if (window.Typebot) {
        Typebot.onClose(() => {
            document.body.classList.remove('typebot-active');
            showChatCall(); // Volta ao Chat Call inicial (avatar + mensagem)
        });
    }
});

</script>
