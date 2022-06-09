const Rama =require('../../db/models/ramy');


class AkcjeRamy{



    async pobierzRamy(req,res){
        const  doc = await Rama.find({});
            res.status(200).json(doc);
        }

    dodajRamy(req,res){
    
        const id = req.body.id;
        const wysokosc = req.body.wysokosc;
        const szerokosc  = req.body.szerokosc;
        const price = req.body.price
        const pole = req.body.pole;
        const magazyn = req.body.magazyn;
        const czas = req.body.czas;

        const newRama = new Rama({id,wysokosc,szerokosc,price,pole,magazyn,czas});
        newRama.save();

    }
    
}
module.exports = new AkcjeRamy();