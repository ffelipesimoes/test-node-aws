### Como Testar (Desafio 1)

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/liqi-challenger.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd liqi-challenger
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute os testes unitários:**

   ```bash
   npm test
   ```

5. **Para gerar uma Chave Privada e uma Chave Pública, execute o aplicativo:**

   ```bash
   npm start
   ```

   O aplicativo irá gerar as chaves e exibir o endereço Ethereum associado à Chave Pública no console.

6. **Para criar um contêiner Docker com a aplicação, você pode usar o seguinte comando:**

   ```bash
   docker build -t liqi-challenger .
   ```

7. **Para executar o contêiner Docker:**

   ```bash
   docker run -p 3000:3000 liqi-challenger
   ```

   A aplicação estará disponível em http://localhost:3000.

### Desafio 2

#### Requisitos Adicionais

- Configuração e implantação da stack AWS CDK para criar recursos na AWS.

#### Como Testar (Desafio 2)

1. **Certifique-se de que você já completou o Desafio 1 e tem o ambiente AWS configurado.**

2. **Crie uma nova branch para o Desafio 2:**

   ```bash
   git checkout -b desafio2
   ```

3. **Atualize o código da stack AWS CDK (`EthereumStack`) para adicionar as variáveis de ambiente `ALCHEMY_API_KEY` e `WEB3_PROVIDER_URL` com os valores apropriados, conforme explicado nas instruções anteriores.**

4. **No diretório raiz do projeto, crie um arquivo chamado `.env` e adicione as variáveis de ambiente da seguinte maneira:**

   ```
   ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
   WEB3_PROVIDER_URL=YOUR_WEB3_PROVIDER_URL
   ```

   Substitua `YOUR_ALCHEMY_API_KEY` pelo seu próprio token de API Alchemy e `YOUR_WEB3_PROVIDER_URL` pela URL do provedor Web3 da rede Ethereum que deseja usar.

5. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

6. **Imprima o arquivo de configuração do CDK e garanta que suas credenciais AWS estejam configuradas:**

   ```bash
   cdk synth
   ```

7. **Implante a stack AWS CDK no ambiente AWS:**

   ```bash
   cdk deploy
   ```

8. **Após a implantação bem-sucedida, você pode enviar uma mensagem para a fila SQS para acionar a função Lambda no AWS Lambda Console ou usando a CLI da AWS.**

9. **Envie uma mensagem para a fila SQS com o seguinte formato:**

   ```json
   {
     "to": "0xAbC123...",
     "value": "0x1bc16d674ec80000"
   }
   ```

   Substitua `"0xAbC123..."` pelo endereço Ethereum de destino e `"0x1bc16d674ec80000"` pelo valor da transação em formato hexadecimal.

10. **Observe o AWS Lambda Console para verificar se a função Lambda foi acionada e se a transação foi enviada com sucesso para a Blockchain EVM.**
