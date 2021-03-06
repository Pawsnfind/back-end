
exports.seed = async function(knex, Promise) {
  await knex('breeds').del()
  await knex.raw('ALTER SEQUENCE breeds_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
            {breed: 'Mixed Breed Dog', species_id: 1},
            {breed: 'Airedale Terriers', species_id:1},
            {breed: 'Akitas', species_id:1},
            {breed: 'Alaskan Malamutes', species_id:1},
            {breed: 'American Staffordshire Terriers', species_id:1},
            {breed: 'Anatolian Shepherd Dogs', species_id:1},
            {breed: 'Australian Cattle Dogs', species_id:1},
            {breed: 'Australian Shepherds', species_id:1},
            {breed: 'Basenjis', species_id:1},
            {breed: 'Basset Hounds', species_id:1},
            {breed: 'Beagles', species_id:1},
            {breed: 'Belgian Malinois', species_id:1},
            {breed: 'Bernese Mountain Dogs', species_id:1},
            {breed: 'Bichons Frises', species_id:1},
            {breed: 'Bloodhounds', species_id:1},
            {breed: 'Border Collies', species_id:1},
            {breed: 'Border Terriers', species_id:1},
            {breed: 'Boston Terriers', species_id:1},
            {breed: 'Bouviers des Flandres', species_id:1},
            {breed: 'Boxers', species_id:1},
            {breed: 'Brittanys', species_id:1},
            {breed: 'Brussels Griffons', species_id:1},
            {breed: 'Bull Terriers', species_id:1},
            {breed: 'Bulldogs', species_id:1},
            {breed: 'Bullmastiffs', species_id:1},
            {breed: 'Cairn Terriers', species_id:1},
            {breed: 'Cane Corso', species_id:1},
            {breed: 'Cardigan Welsh Corgis', species_id:1},
            {breed: 'Cavalier King Charles Spaniels', species_id:1},
            {breed: 'Chihuahuas', species_id:1},
            {breed: 'Chinese Crested', species_id:1},
            {breed: 'Chinese Shar-Pei', species_id:1},
            {breed: 'Chow Chows', species_id:1},
            {breed: 'Collies', species_id:1},
            {breed: 'Coton de Tulear', species_id:1},
            {breed: 'Dachshunds', species_id:1},
            {breed: 'Dalmatians', species_id:1},
            {breed: 'Doberman Pinschers', species_id:1},
            {breed: 'Dogues de Bordeaux', species_id:1},
            {breed: 'French Bulldogs', species_id:1},
            {breed: 'German Shepherd Dogs', species_id:1},
            {breed: 'Giant Schnauzers', species_id:1},
            {breed: 'Great Danes', species_id:1},
            {breed: 'Great Pyrenees', species_id:1},
            {breed: 'Greater Swiss Mountain Dogs', species_id:1},
            {breed: 'Havanese', species_id:1},
            {breed: 'Irish Wolfhounds', species_id:1},
            {breed: 'Italian Greyhounds', species_id:1},
            {breed: 'Keeshonden', species_id:1},
            {breed: 'Lagotti Romagnoli', species_id:1},
            {breed: 'Leonbergers', species_id:1},
            {breed: 'Lhasa Apsos', species_id:1},
            {breed: 'Maltese', species_id:1},
            {breed: 'Mastiffs', species_id:1},
            {breed: 'Miniature American Shepherds', species_id:1},
            {breed: 'Miniature Pinschers', species_id:1},
            {breed: 'Miniature Schnauzers', species_id:1},
            {breed: 'Newfoundlands', species_id:1},
            {breed: 'Norwegian Elkhounds', species_id:1},
            {breed: 'Old English Sheepdogs', species_id:1},
            {breed: 'Papillons', species_id:1},
            {breed: 'Pekingese', species_id:1},
            {breed: 'Pembroke Welsh Corgis', species_id:1},
            {breed: 'Pointers (German Shorthaired)', species_id:1},
            {breed: 'Pointers (German Wirehaired)', species_id:1},
            {breed: 'Pomeranians', species_id:1},
            {breed: 'Poodles', species_id:1},
            {breed: 'Portuguese Water Dogs', species_id:1},
            {breed: 'Pugs', species_id:1},
            {breed: 'Rat Terriers', species_id:1},
            {breed: 'Retrievers (Chesapeake Bay)', species_id:1},
            {breed: 'Retrievers (Flat-Coated)', species_id:1},
            {breed: 'Retrievers (Golden)', species_id:1},
            {breed: 'Retrievers (Labrador)', species_id:1},
            {breed: 'Retrievers (Nova Scotia Duck Tolling)', species_id:1},
            {breed: 'Rhodesian Ridgebacks', species_id:1},
            {breed: 'Rottweilers', species_id:1},
            {breed: 'Russell Terriers', species_id:1},
            {breed: 'Samoyeds', species_id:1},
            {breed: 'Scottish Terriers', species_id:1},
            {breed: 'Setters (English)', species_id:1},
            {breed: 'Setters (Irish)', species_id:1},
            {breed: 'Shetland Sheepdogs', species_id:1},
            {breed: 'Shiba Inu', species_id:1},
            {breed: 'Shih Tzu', species_id:1},
            {breed: 'Siberian Huskies', species_id:1},
            {breed: 'Soft Coated Wheaten Terriers', species_id:1},
            {breed: 'Spaniels (Boykin)', species_id:1},
            {breed: 'Spaniels (Cocker)', species_id:1},
            {breed: 'Spaniels (English Cocker)', species_id:1},
            {breed: 'Spaniels (English Springer)', species_id:1},
            {breed: 'St. Bernards', species_id:1},
            {breed: 'Staffordshire Bull Terriers', species_id:1},
            {breed: 'Standard Schnauzers', species_id:1},
            {breed: 'Tibetan Terriers', species_id:1},
            {breed: 'Vizslas', species_id:1},
            {breed: 'Weimaraners', species_id:1},
            {breed: 'West Highland White Terriers', species_id:1},
            {breed: 'Whippets', species_id:1},
            {breed: 'Wirehaired Pointing Griffons', species_id:1},
            {breed: 'Yorkshire Terriers', species_id:1},
            {breed: 'Mixed Breed Cat', species_id: 2},
            {breed: 'Abyssinian', species_id:2},
            {breed: 'American Bobtail', species_id:2},
            {breed: 'American Curl', species_id:2},
            {breed: 'American Shorthair', species_id:2},
            {breed: 'American Wirehair', species_id:2},
            {breed: 'Balinese', species_id:2},
            {breed: 'Bengal', species_id:2},
            {breed: 'Birman', species_id:2},
            {breed: 'Bombay', species_id:2},
            {breed: 'British Shorthair', species_id:2},
            {breed: 'Burmese', species_id:2},
            {breed: 'Burmilla', species_id:2},
            {breed: 'Chartreux', species_id:2},
            {breed: 'Colorpoint Shorthair', species_id:2},
            {breed: 'Cornish Rex', species_id:2},
            {breed: 'Devon Rex', species_id:2},
            {breed: 'Egyptian Mau', species_id:2},
            {breed: 'European Burmese', species_id:2},
            {breed: 'Exotic', species_id:2},
            {breed: 'Havana Brown', species_id:2},
            {breed: 'Household Pets', species_id:2},
            {breed: 'Japanese Bobtail', species_id:2},
            {breed: 'Khao Manee', species_id:2},
            {breed: 'Korat', species_id:2},
            {breed: 'LaPerm', species_id:2},
            {breed: 'Lykoi', species_id:2},
            {breed: 'Maine Coon Cat', species_id:2},
            {breed: 'Manx', species_id:2},
            {breed: 'Norwegian Forest Cat', species_id:2},
            {breed: 'Ocicat', species_id:2},
            {breed: 'Oriental', species_id:2},
            {breed: 'Persian', species_id:2},
            {breed: 'RagaMuffin', species_id:2},
            {breed: 'Ragdoll', species_id:2},
            {breed: 'Russian Blue', species_id:2},
            {breed: 'Scottish Fold', species_id:2},
            {breed: 'Selkirk Rex', species_id:2},
            {breed: 'Siamese', species_id:2},
            {breed: 'Siberian', species_id:2},
            {breed: 'Singapura', species_id:2},
            {breed: 'Somali', species_id:2},
            {breed: 'Sphynx', species_id:2},
            {breed: 'Tonkinese', species_id:2},
            {breed: 'Turkish Angora', species_id:2},
            {breed: 'Turkish Van', species_id:2},


      ]);
    });
};
