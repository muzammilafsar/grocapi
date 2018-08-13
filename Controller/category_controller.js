var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var SubCategory = mongoose.model('SubCategory');

exports.get_list = async (req, res) => {
        let arr = [];
        Category.find({}, (err, cat) => {
            if (err) {

            } else {
                let data = cat.map( async val => {
                    await SubCategory.find({category_name: val.name}, (err, sub) => {
                        arr.push({ category: val, sub_category: sub });
                        console.log(arr)
                    });

                })
                Promise.all(data).then(comp => {
                    res.send({status: 200, categories: arr});
                }) 



            }
        })
    // res.send({
    //     categories: [
    //         {
    //             category: {
    //                 name: 'Category_1'
    //             },
    //             sub_category: [
    //                 {name: 'Sub_1'}
    //             ]
    //         },
    //         {
    //             category: {
    //                 name: 'Category_2'
    //             },
    //             sub_category: [
    //                 {name: 'Sub_2'}
    //             ]
    //         }
    //     ]
    // })
}

exports.get_all_category = (req, res) => {
    // var cato = new Category({
    //     name: 'Curries'
    // });
    // cato.save();
    Category.find({}, (err, cat) => {
        if (err) {
            res.send('Interval error', err);
        }
        res.json({
            status: 200,
            category: cat
        });
    });

}
exports.get_subcategory_of_category = (req, res) => {

    SubCategory.find({ name: req.body.name }, (err, sub_cat) => {
        if (err) {

        }
        else {
            res.json({
                status: 200,
                sub_categories: sub_cat
            })
        }
    })
}

exports.create_category = (req, res) => {
    let a = new Category({
        name: req.body.name,
        image: req.body.image,
        enable: req.body.enable,
        source: req.body.source,
        details: req.body.details
    });
    a.save((err, cat) => {
        if (err) {
            console.log(err);
            res.send({ status: 404 });
        } else {
            res.send({ status: 200, });
        }
    });
}