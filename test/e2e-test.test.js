const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect

chai.use(chaiHttp);

const url = 'http://localhost:3000'


describe('Inserte el nombre y el precio', ()=>{
    it('Esperamos el nombre y el precio', (done)=>{
        chai.request(url)
        .post('/api/v1/products')
        .send({name:'Teclado', price:2000})
        .end((err,res)=>{
            console.log(res.body)
            expect(res).to.have.status(200)
            done()
        })
    })
})



// describe('suite de pruebas e2e para el curso', ()=>{
//     it('esperamos un hola mundo',(done)=>{
//         chai.request('http://localhost:3000')
//             .get('/')
//             .end((err, res)=>{
//                 console.log('A')
//                 chai.assert.equal(res.status(),200)
//                 done()
//             })
//             console.log('B')
//     })
// })
