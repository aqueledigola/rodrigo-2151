const items = [
    {
        id: 11409,
        img: "../img/prod1.png",
        nome: "SSD Kingston A400, 240GB, Sata III, Leitura 500MBs Gravação 350MBs, SA400S37/240G",

        other1: "../img/prod1_other1.png",
        other2: "../img/prod1_other2.png",
        other3: "../img/prod1_other3.png",
        other4: "../img/prod1_other4.png",

        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png", 
        avalia: "8.314",

        oldprice: 289.00,
        desconto: 41,
        newprice: 289.00 - [(289.00 * 41) / 100],

        parc: 8,
        parcvalue: 170.51 / 8,

        quant: 0,
        area: 1
    },
    // produto 1

    {
        id: 21508,
        img: "../img/prod2.png",
        nome: "Processador AMD Ryzen 5 3600 3.6GHz (4.2GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-1",

        other1: "../img/prod2_other1.png",
        other2: "../img/prod2_other2.png",
        other3: "../img/prod2_other3.png",
        other4: "../img/prod2_other4.png",

        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_on.png", 
        avalia: "5.942",

        oldprice: 1528.24,
        desconto: 38,
        newprice: 1528.24 - [(1528.24 * 38) / 100],

        parc: 12,
        parcvalue: 947.51 / 12,

        quant: 0,
        area: 1
    },
    // produto 2

    {
        id: 31407,
        img: "../img/prod3.png",
        nome: "Cadeira Gamer Setupdate Black Throne, Reclinável, 4D, Suporta Até 180KG, Branco E Preto",

        other1: "../img/prod3_other1.png",
        other2: "../img/prod3_other2.png",
        other3: "../img/prod3_other3.png",
        other4: "../img/prod3_other4.png",

        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png",
        avalia: "2.421",

        oldprice: 1787.88,
        desconto: 34,
        newprice: 1787.88 - ((1787.88 * 34) / 100),

        parc: 12,
        parcvalue: 1180.00 / 12,

        quant: 0,
        area: 1
    },
    // produto 3

    {
        id: 41506,
        img: "../img/prod4.png",
        nome: "Teclado Gamer Logitech Prodigy G213, RGB, Black, ABNT2, 920-009438",

        other1: "../img/prod4_other1.png",
        other2: "../img/prod4_other2.png",
        other3: "../img/prod4_other3.png",
        other4: "../img/prod4_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_on.png", 
        avalia: "1.994",

        oldprice: 588.12,
        desconto: 15,
        newprice: 588.12 - [(588.12 * 15) / 100],

        parc: 8,
        parcvalue: 499.90 / 8,

        quant: 0,
        area: 1
    },
    // produto 4

    {
        id: 51305,
        img: "../img/prod5.png",
        nome: "Processador AMD Athlon 3000G 3.5GHz + Cooler AMD Wraith Stealth",

        other1: "../img/prod5_other1.png",
        other2: "../img/prod5_other2.png",
        other3: "../img/prod5_other3.png",
        other4: "../img/prod5_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_off.png",
        rate5: "../img/star_off.png", 
        avalia: "1382",

        oldprice: 516.35,
        desconto: 15,
        newprice: 516.35 - [(516.35 * 15) / 100],

        parc: 10,
        parcvalue: 438.90 / 10,

        quant: 0,
        area: 1
    },
    // produto 5

    {
        id: 12309,
        img: "../img/prod6.png",
        nome: "PC Gamer S-Gamer Custo Beneficio 2022 Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / DDR4 16GB(2x8) / SSD 480GB",

        other1: "../img/prod6_other1.png",
        other2: "../img/prod6_other2.png",
        other3: "../img/prod6_other3.png",
        other4: "../img/prod6_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_off.png",
        rate5: "../img/star_off.png", 
        avalia: "246",

        oldprice: 7797.17,
        desconto: 15,
        newprice: 7797.17 - [(7797.17 * 15) / 100],

        parc: 12,

        quant: 0,
        area: 2
    },
    // produto 6

    {
        id: 22408,
        img: "../img/prod7.png",
        nome: "PC Gamer S-Gamer FrameMaster AMD Ryzen 5 5600X / NVIDIA GeForce RTX 2060 / 8GB DDR4 / SSD 240GB",

        other1: "../img/prod7_other1.png",
        other2: "../img/prod7_other2.png",
        other3: "../img/prod7_other3.png",
        other4: "../img/prod7_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png", 
        avalia: "198",

        oldprice: 6725.42,
        desconto: 15,
        newprice: 6725.42 - [(6725.42 * 15) / 100],

        parc: 12,

        quant: 0,
        area: 2
    },
    // produto 7

    {
        id: 32407,
        img: "../img/prod8.png",
        nome: "PC Gamer S-Gamer Brave AMD Ryzen 5 7600X / NVIDIA GeForce RTX 3070 / 16GB DDR5 / SSD 240GB",

        other1: "../img/prod8_other1.png",
        other2: "../img/prod8_other2.png",
        other3: "../img/prod8_other3.png",
        other4: "../img/prod8_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png", 
        avalia: "114",

        oldprice: 11961.74,
        desconto: 15,
        newprice: 11961.74 - [(11961.74 * 15) / 100],

        parc: 12,

        quant: 0,
        area: 2
    },
    // produto 8

    {
        id: 42406,
        img: "../img/prod9.png",
        nome: "PC Gamer T-Gamer Prodigy AMD Ryzen 5 5600G / 16GB DDR4 / SSD 480GB",

        other1: "../img/prod9_other1.png",
        other2: "../img/prod9_other2.png",
        other3: "../img/prod9_other3.png",
        other4: "../img/prod9_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png", 
        avalia: "96",

        oldprice: 3933.75,
        desconto: 15,
        newprice: 3933.75 - [(3933.75 * 15) / 100],

        parc: 12,

        quant: 0,
        area: 2
    },
    // produto 9

    {
        id: 52405,
        img: "../img/prod10.jpg",
        nome: "PC Gamer T-Gamer Prodigy AMD Ryzen 5 5600G / 16GB DDR4 / SSD 480GB",

        other1: "../img/prod10_other1.png",
        other2: "../img/prod10_other2.png",
        other3: "../img/prod10_other3.png",
        other4: "../img/prod10_other4.png",
        
        rate1: "../img/star_on.png",
        rate2: "../img/star_on.png",
        rate3: "../img/star_on.png",
        rate4: "../img/star_on.png",
        rate5: "../img/star_off.png", 
        avalia: "96",

        oldprice: 3933.75,
        desconto: 15,
        newprice: 3933.75 - [(3933.75 * 15) / 100],

        parc: 12,

        quant: 0,
        area: 2 
    }
    // produto 10
]

let containerProdutos1 = document.getElementById("produtos_area1");
let containerProdutos2 = document.getElementById("produtos_area2");
let containerProdutos3 = document.getElementById("produto_compra");

function iniciarLoja() {
    const area1 = items.filter(p => p.area === 1);
    const area2 = items.filter(p => p.area === 2);

    area1.map((val)=> {
        containerProdutos1.innerHTML += 
        `
            <a href="comprar.html?produto=`+val.id+`">
                <div class="card-item">
                    <div class="card-img">
                        <img src="`+val.img+`">
                    </div>

                    <div class="content">
                        <h1>`+val.nome+`</h1>
                        
                        <div class="rate">
                            <img src="`+val.rate1+`">
                            <img src="`+val.rate2+`">
                            <img src="`+val.rate3+`">
                            <img src="`+val.rate4+`">
                            <img src="`+val.rate5+`">
                            
                            <h2>(`+val.avalia+`)</h2>
                        </div>

                        <div class="price">
                            <div class="desc">
                                <h3>R$ `+val.oldprice.toFixed(2).replace(".",",")+`</h3>
                                <span>↓`+val.desconto+`%</span>
                            </div>
                            
                            <h4>R$ `+val.newprice.toFixed(2).replace(".",",")+`</h4>
                        </div>

                        <h5>`+val.parc+`x de R$ `+val.parcvalue.toFixed(2).replace(".",",")+` sem juros</h5>
                    </div> <!--card-content-->
                </div> <!--card-item-->
            </a>
        `;
    }) 
    
    // PRIMEIRA LINHA DE PRODUTOS
    
    area2.map((val)=> {
        containerProdutos2.innerHTML += 
        `
            <a href="comprar.html?produto=`+val.id+`">
                <div class="card-item">
                    <div class="card-img">
                        <img src="`+val.img+`">
                    </div>

                    <div class="content">
                        <h1>`+val.nome+`</h1>
                        
                        <div class="rate">
                            <img src="`+val.rate1+`">
                            <img src="`+val.rate2+`">
                            <img src="`+val.rate3+`">
                            <img src="`+val.rate4+`">
                            <img src="`+val.rate5+`">
                            
                            <h2>(`+val.avalia+`)</h2>
                        </div>

                        <div class="price">
                            <div class="desc">
                                <h3>R$ `+val.oldprice.toFixed(2).replace(".",",")+`</h3>
                                <span>↓`+val.desconto+`%</span>
                            </div>
                            
                            <h4>R$ `+val.newprice.toFixed(2).replace(".",",")+`</h4>
                        </div>

                        <h5>à vista com `+val.desconto+`% de desconto no boleto ou pix</h5>
                    </div> <!--card-content-->
                </div> <!--card-item-->
            </a>
        `;
    }) 
    // SEGUNDA LINHA DE PRODUTOS   
}

function url() {
    const urlparam = new URLSearchParams(window.location.search);
    const idparam = urlparam.get("produto");

    let numid = idparam * 1;
    const compra = items.filter(p => p.id === numid);

    compra.map((val)=> {
        containerProdutos3.innerHTML += 
        `
            <div class="buy-area">
                <div class="other-img">
                    <img src="`+val.other1+`">
                    <img src="`+val.other2+`">
                    <img src="`+val.other3+`">
                    <img src="`+val.other4+`">     
                </div> <!--other-img-->

                <div class="main-img">
                    <img src="`+val.img+`">
                </div> <!--main-img-->

                <div class="buy-container">
                    <div class="content">
                        <h1>`+val.nome+`</h1>

                        <div class="info">
                            <span> ° mais vendido</span>

                            <p>Vendido por: <a href="index.html">Setupdate</a></p>
                        </div>

                        <div class="fast-send">
                            <img src="img/icon_fast.png">
                            <p>Pronta entrega</p>
                        </div>

                        <div class="rate">
                            <img src="`+val.rate1+`">
                            <img src="`+val.rate2+`">
                            <img src="`+val.rate3+`">
                            <img src="`+val.rate4+`">
                            <img src="`+val.rate5+`">

                            <h2>(`+val.avalia+`)</h2>
                        </div>

                        <div class="price">
                            <div class="desc">
                                <h3>R$ `+val.oldprice.toFixed(2).replace(".",",")+`</h3>
                                <span> `+val.desconto+`% </span>
                            </div>
                            
                            <h4>R$ `+val.newprice.toFixed(2).replace(".",",")+`</h4>
                        </div>

                        <h5>`+val.parc+`x sem juros no cartão</h5>
                    </div> <!--content-->

                    <button type="button" class="btn btn-primary">Comprar</button>
                </div> <!--buy-container-->
            </div> <!--buy-area-->
        `;
    })
}

url();
iniciarLoja();