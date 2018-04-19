(function() {
  var gems = [{
    name: 'Dodcohderon',
    price: 12.95,
    description: 'A beautiful gem from the soil of India. It is very rare still not that costly because of less demand.',
    specification: 'Low concentration of Carbon. Polishing takes 1 - 2 hours. Cheap but still attractive to Women.',
    reviews: [
      {
        star: 3,
        body: 'I am happy with this product. Worth buying.',
        author: 'joe@gmail.com'
      },{
        star: 1,
        body: 'A really bad gem, not worth this price.',
        author: 'amela@yahoo.com'
      },{
        star: 5,
        body: 'One of the best Gem I have ever purchased.',
        author: 'kim_wayne@hotmail.com'
      }
    ],
    canPurchase: true,
    soldOut: false,
    image: 'http://pngimg.com/uploads/diamond/diamond_PNG6699.png'
  },{
    name: 'Pentagonal Gem',
    price: 21.95,
    description: 'Pentagonal shape gem mostly found in South Africa, one of the most demanding Gem.',
    specification: 'Medium concentration of Carbon. Polishing takes 3 - 4 hours.',
    reviews: [
      {
        star: 3,
        body: 'I am happy with this product. Worth buying.',
        author: 'bruce@gmail.com'
      },{
        star: 5,
        body: 'One of the best Gem I have ever purchased.',
        author: 'kent@hotmail.com'
      }
    ],
    canPurchase: false,
    soldOut: false,
    image: 'http://pngimg.com/uploads/ruby/ruby_PNG5.png'
  },{
    name: 'Hexgonal Gem',
    price: 30.15,
    description: 'A beautiful and most expensive one. Found in Indonesia.',
    specification: 'High concentration of Carbon. Polishing takes almost 24 hours.',
    reviews: [
      {
        star: 2,
        body: 'I am not that satisfied with this Gem.',
        author: 'kloey@gmail.com'
      },{
        star: 4,
        body: 'A okay okay product, but looks beautiful after wearing this.',
        author: 'jack@yahoo.com'
      },{
        star: 4,
        body: 'A great product, I will recommend this to everyone.',
        author: 'sam@hotmail.com'
      }
    ],
    canPurchase: true,
    soldOut: false,
    image: 'http://www.sifani.com/img/gems/gems.png'
  }]

  app.controller('StoreController', function() {
    this.products = gems;
  });

})();