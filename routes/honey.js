const express = require('express');
const router = express.Router();
const Honey = require('../models/honey');
const Dashboard = '../honey-store/src/components/dashboard/Dashboard';


// // Lấy danh sách mật ong
// router.get('/dashboard', async (req, res) => {
//   try {
//     const honeyList = await Honey.find();
//     res.json(honeyList);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Tạo mới mật ong
// router.post('/dashboard/add-product', async (req, res) => {
//   const honey = new Honey({
//     name: req.body.name,
//     price: req.body.price,
//     description: req.body.description,
//   });

//   try {
//     const newHoney = await honey.save();
//     res.status(201).json(newHoney);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Xoá mật ong
// router.delete('/:id', async (req, res) => {
//   try {
//     await Honey.findByIdAndRemove(req.params.id);
//     res.json({ message: 'Xoá thành công' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });



/*
* GET /
* Admin - Creat new honey
*/
router.get('/add-product', async (req, res) => {

    try {
        // const locals = {
        //     title: "Add Honey",
        //     description: "Simple honey created with NodeJS, Express & MongoDB"
        // }

        const data = await Honey.find();
        res.render('dashboard/add-product', {
            locals,
            layout: Dashboard
        });
    } catch (error) {
        console.log(error);

    }
});

/*
* POST /
* Admin - Create new honey
*/
router.post('/add-product', async (req, res) => {
  try {
      const honey = new Honey({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      });

      const newHoney = await honey.save();
      res.redirect('/dashboard');
      res.status(201).json(newHoney);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

module.exports = router;
