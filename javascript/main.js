//opdracht 1
const jsonPerson = `
{
    "firstname": "Hansnain",
    "email": "302732920@student.rocmondriaan.nl"
    
}
`
const objectPerson = JSON.parse(jsonPerson)

console.log("Voornaam is: ", objectPerson.firstname);
console.log("Email is: ", objectPerson.email);

//opdracht 1b
const jsonName = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }
`;

const objectPersoon = JSON.parse(jsonName)
console.log("id is: ", objectPersoon.id, "firstname is: ", objectPersoon.firstname, "lastname is: ", objectPersoon.lastname);

//opdracht 2
const jsonOpdracht2 = `
{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }
`;

const objectopdracht2 = JSON.parse(jsonOpdracht2)
console.log("title is:", objectopdracht2.title, "content is:", objectPersoon.content, "publishedAt is:", objectopdracht2.publishedAt);

//opdracht 3
const jsonOpdacht3 = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }
`;

const objectopdracht3 = JSON.parse(jsonOpdacht3)
console.log("email is: ", objectopdracht3.email, "username is: ", objectopdracht3.username, "city is: ", objectopdracht3.address.city, "company is: ", objectopdracht3.company);

//opdracht 4
const jsonOpdracht4 = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }
`;

const objectopdracht4 = JSON.parse(jsonOpdracht4)
console.log("het hele object is:", objectopdracht4);

//opdracht 5
const jsonopdracht5 = `
[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]
`;
const objectopdracht5 = JSON.parse(jsonopdracht5)
console.log("comment is:", objectopdracht5[0].comment);
console.log("comment is:", objectopdracht5[1].comment);
console.log("comment is:", objectopdracht5[2].comment);

//opdracht 6
const jsonOpdracht6 = `
[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
  ]
`;

const objectopdracht6 = JSON.parse(jsonOpdracht6);
const ulList = document.querySelector(".list");
for (let index = 0; index < objectopdracht6.length; index++) {
    const opdr6 = objectopdracht6[index];
    
    ulList.innerHTML += "<li>" + " " + opdr6.title + " " +opdr6.url + "</li>"
}

//opdracht 7
const jsonOpdracht7 = `
{ 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
`;
const objectopdracht7 = JSON.stringify(jsonOpdracht7)
console.log(objectopdracht7);

//opdracht 8
const jsonOpdracht8 = `
[
	{ 
		name: 'Wolverine', 
		age: 38,
		marks: {
			science: 20,
			math: 15
		}
	},
	{ 
		name: 'Xavier', 
		age: 64,
		marks: {
			science: 95,
			math: 90
		}
	},
	{ 
		name: 'Magneto', 
		age: 68,
		marks: {
			science: 90,
			math: 85
		}
	}
]
`;
const objectopdracht8 = JSON.stringify(jsonOpdracht8)
console.log(objectopdracht8);