const path = require("path") // Importa o módulo 'path' do Node.js, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = { // Exporta um objeto que contém a configuração do Webpack.
    entry: path.resolve(__dirname, "src", "js", "index.js"), // Define o ponto de entrada da aplicação, que é o arquivo 'index.js' localizado na pasta 'src/js'. __dirname é uma variável que representa o diretório atual do arquivo.
    
    output: { // Define as configurações de saída do Webpack.
        filename: "main.js", // Nome do arquivo de saída que será gerado após o processo de bundling.
        path: path.resolve(__dirname, "dist"), // Define o diretório onde o arquivo de saída será salvo, que é a pasta 'dist' no diretório atual.
    },
    
    mode: "development", // Define o modo de operação do Webpack. 'development' ativa várias funcionalidades úteis para desenvolvimento, como a geração de mapas de origem (source maps).
    plugins: [new HTMLWebpackPlugin()],

    module:{
        rules:[{
            test:/\.Css$/i, 
            use: ["style-loader", "css-loader"],
            exclude: "/node_modules",
        }]
    }
}