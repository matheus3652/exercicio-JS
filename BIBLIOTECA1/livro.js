class Livro {
 // Complete o construtor aqui
 constructor(titulo, autor, anoPublicacao) {
 // Inicialize as propriedades aqui
 this.titulo = titulo;
 this.autor = autor;
 this.anoPublicacao = anoPublicacao;
 this.disponivel = true;
 }

 // Implemente os métodos abaixo
 obterInformacoes() {
 // Deve retornar uma string com título, autor e ano
 return `${this.titulo} por ${this.autor} (${this.anoPublicacao})`;
 }

 estaDisponivel() {
 // Deve retornar true se o livro estiver disponível
 return this.disponivel;
 }

 emprestar() {
 // Deve marcar o livro como indisponível
 this.disponivel = false;
 }

 devolver() {
 // Deve marcar o livro como disponível
 this.disponivel = true;
 }
}
// Teste sua implementação
const meuLivro = new Livro("Neymar: conversa entre pai e filho", "NEYMAR", 2014);



console.log(meuLivro.obterInformacoes());
console.log("Disponível:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro.estaDisponivel());


const meuLivro3 = new Livro("cristiano: pai estou com fome ", "NEYMAR", 2014);
console.log(meuLivro3.obterInformacoes());
console.log("Disponível:", meuLivro3.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro3.estaDisponivel());


const meuLivro4 = new Livro("biblia: sagrada", "Deus", 0);
console.log(meuLivro4.obterInformacoes());
console.log("Disponível:", meuLivro4.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro4.estaDisponivel());


const meuLivro5 = new Livro("O aliensta", "machado de assis", 1900);
console.log(meuLivro5.obterInformacoes());
console.log("Disponível:", meuLivro5.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro5.estaDisponivel());


const meuLivro6 = new Livro("Candiru: Entre o Céu e o Inferno", "Neide", 70);
console.log(meuLivro6.obterInformacoes());
console.log("Disponível:", meuLivro6.estaDisponivel());
meuLivro.emprestar()
console.log("Disponível após empréstimo:", meuLivro6.estaDisponivel());


const meuLivro7 = new Livro("1984", "George Orwell", 1949);
console.log(meuLivro7.obterInformacoes());
console.log("Disponível:", meuLivro7.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro7.estaDisponivel());


const meuLivro8 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);
console.log(meuLivro8.obterInformacoes());
console.log("Disponível:", meuLivro8.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro8.estaDisponivel());


const meuLivro9 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
console.log(meuLivro9.obterInformacoes());
console.log("Disponível:", meuLivro9.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro9.estaDisponivel());



function carregarLivrosTabela(){
    const livros = [
       new Livro("Neymar: conversa entre pai e filho ", "NEYMAR", 2014),
        new Livro("cristiano: pai estou com fome ", "NEYMAR", 2014),
        new Livro("O aliensta", "machado de assis", 1900),
        new Livro("biblia: sagrada", "Deus", 0),
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943),
    
    
    ];
    livros[2].emprestar();
    livros[3].emprestar();
    let tableLivros = document.getElementById("livros-tbody");
    for (let livro of livros) {
        let row = document.createElement("tr");
        let titulo = document.createElement("td");
        titulo.textContent = livro.titulo;
        let autor = document.createElement("td");
        autor.textContent = livro.autor;
        let ano = document.createElement("td");
        ano.textContent = livro.anoPublicacao;
        let disponivel = document.createElement("td");
        disponivel.textContent = livro.estaDisponivel() ? "Sim" : "Não";
        row.appendChild(titulo);
        row.appendChild(autor);
        row.appendChild(ano);
        row.appendChild(disponivel);
        tableLivros.appendChild(row);   
    }
}
document.addEventListener("DOMContentLoaded", carregarLivrosTabela);