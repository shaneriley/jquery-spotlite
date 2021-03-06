$(function() {

  $("#demo-1").spotlite({
    pool: demo_data()
  });

  $("#demo-2").spotlite({
    multiselect: false,
    ajax: true,
    ajax_opts: {
      url: "/javascript/people.json",
      method: "get"
    }
  });

  $("#demo-3").spotlite({
    display_matches_on_focus: true
  });

  function demo_data() {
    return ["Alfredo Elton Lindsey", "Alonzo Bartlett", "Amalia Oliver", "Angie Hopkins", "Antonio Valentin Vaughan", "Arron Conrad Sweeney", "Art Harmon", "Barrett Larson", "Bart Velazquez", "Bernadine Goodman", "Blanche Emily Burch", "Bobbie Tate", "Brianna Juliet Chavez", "Bridgette Villarreal", "Cameron Van Sutton", "Charlotte Coleen Edwards", "Clayton Phillips", "Cora Pennington", "Cornelia King", "Curt Peters", "Deirdre Goldie Estes", "Deirdre Sherrie Becker", "Devin Larson", "Diego Kim", "Donna Maryellen Glenn", "Earl Garrett", "Earle Wiggins", "Eddy Ray", "Edmund Ulysses Haynes", "Efrain Sharp", "Elaine Huff", "Eliseo Mathew Oneal", "Elmer Aron Preston", "Enoch Garcia", "Errol Dixon", "Estella Dixon", "Ester Abigail Lancaster", "Ethel Cathryn Burgess", "Eunice Tonya Flowers", "Fanny Meadows", "Felecia Norton", "Franklyn Juarez", "Freida Finley", "Gwen Tonya Olsen", "Harlan Richardson", "Hilda Shaffer", "Hugo Marcelo Estes", "Ina Tonya Cervantes", "Isabel Mindy Huff", "Jamal Cruz Merrill", "Janice Ayers", "Josefa Jenna Barton", "Josefa Richards", "Joseph Walters", "Jospeh Louis Spencer", "Lakisha Kristine Doyle", "Laurel Levine", "Lawrence Tate", "Leona Maxine Hampton", "Leonel Roman", "Leroy Atkins", "Lottie Catalina Hogan", "Luella Sims", "Mable Thompson", "Marcel Horn", "Marlene Jayne Green", "Mattie Aimee Goff", "Maureen Madeleine Stevens", "Max York", "Millard Brooks", "Odell Kerry Rosa", "Rachel Bray", "Ramiro Rivas", "Randi Etta Fulton", "Reva Karina Ferguson", "Rico Minh Mcdonald", "Robyn Joseph", "Romeo Velez", "Rosetta Marilyn Kennedy", "Roxanne Belinda Ewing", "Rudolf Harold Leach", "Sarah Edna Fitzpatrick", "Sebastian Hilario Langley", "Seth Hyde", "Shana Browning", "Sharlene Earlene Guzman", "Sheryl Elsa Suarez", "Sid Damion Gonzalez", "Stephen Reyes Stanley", "Susan Leann Page", "Susana Wynn", "Thanh Haney", "Theodore Soto", "Tonia Melisa Carney", "Tyree Green", "Vera Karin Reeves", "Virgil Gomez", "Williams Burgess", "Williams Mitch Floyd", "Zack Leslie Hicks"];
  }

});
