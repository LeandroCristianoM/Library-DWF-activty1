import milnovecientos from '../assets/covers/1984.webp'; 
import BraveNewWorld from '../assets/covers/Brave New World.webp'; 
import cienanios from '../assets/covers/Cien años de soledad.jpg'; 
import nomViento from '../assets/covers/El nombre del viento.jpg'; 
import harryPotterFilosofal from '../assets/covers/Harry Potter y la piedra filosofal.webp'; 
import lucesBohemia from '../assets/covers/Luces de bohemia esperpento.jpg'; 
import oneHundred from '../assets/covers/One Hundred Years of Solitude.jpg'; 
import prideAndPrejuice from '../assets/covers/Pride and Prejudice.jpg'; 
import alchimist from '../assets/covers/The Alchemist.jpg'; 
import theChater from '../assets/covers/The Catcher in the Rye.jpeg'; 
import daVinciCode from '../assets/covers/The Da Vinci Code.jpeg'; 
import girlDragon from '../assets/covers/The Girl with the Dragon Tattoo.jpg'; 
import gatsby from '../assets/covers/The Great Gatsby.jpg'; 
import hitchhieker from '../assets/covers/The Hitchhiker Guide to the Galaxy.webp'; 
import lordRings from '../assets/covers/The Lord of the Rings.jpg'; 
import killMockingbird from '../assets/covers/To Kill a Mockingbird.jpg'; 
import hobbit from '../assets/covers/The Hobbit.jpeg'
import rusiOlvidada from '../assets/covers/Rusia olvidada.jpg'
import ensayoCeguera from '../assets/covers/ensayo-sobre-la-ceguera.jpg'
import mundoFeliz from '../assets/covers/Un mundo feliz.webp'
import Frankenstein from '../assets/covers/Frankenstein.webp'
import Madame from '../assets/covers/Madame Bovary.jpg'
import poetaNewYor from '../assets/covers/Poeta en New York.jpeg'
import ViajesGulliver from '../assets/covers//Viajes de Gulliver.jpeg'
import Aleph from '../assets/covers/El Aleph.webp'
import Moby from '../assets/covers/moby_dick.jpeg'
import OrgulloPrejuicio from '../assets/covers/orgullo-y-prejuicio.jpg'
import LaberintoSoledad from '../assets/covers/El laberinto de la soledad.jpeg'
import imagenNoDisponible from '../assets/covers/imagen disponible.jpg'
import tala from '../assets/covers/tala.webp'
import sangreFria from '../assets/covers/SangreFria.jpg'
import islaTesoro from '../assets/covers/IslaTesoro.png'
import guillermoTel from '../assets/covers/GuillermoTel.jpg'
import tunel from '../assets/covers/Tunel.jpg'
import vientoLlevo from '../assets/covers/VientoLlevo.jpg'
import uvasIra from '../assets/covers/UvasIra.jpeg'
import viejomar from '../assets/covers/ViejoMar.jpeg'
import guerraFinMundo from '../assets/covers/GerraFinMundojpg.jpg'
import demian from '../assets/covers/Demian.png'
import ulises from '../assets/covers/Ulises.webp'
import eneida from '../assets/covers/Eneida.png'
import grandesExperanzas from '../assets/covers/GrandesEsperanzas.webp'
import hamlet from '../assets/covers/Hamlet.jpeg'
import siHombre from '../assets/covers/SiEstoEsUnHombre.jpg'
import faro from '../assets/covers/Faro.webp'
import metamamorfosis from '../assets/covers/metamorfosis.jpeg'
import guardianCenteno from '../assets/covers/guardian_entre_el_centeno.jpg'
import colmena from '../assets/covers/colmena.webp'



const dataLibros = [
    {
      libroId: 1,
        nombre: 'El nombre del viento',
        autor: 'Patrick Rothfuss',
        anioPublicacion: 2007,
        isbn: '9788401352836',
        imagenPortada: nomViento,
        sinopsis: 'El nombre del viento es una novela de fantasía escrita por Patrick Rothfuss.',
        criticas: ['Fascinante historia', 'Personajes memorables'],
        precioAlquiler: 0.45

      },
      {
        libroId: 2,
        nombre: '1984',
        autor: 'George Orwell',
        anioPublicacion: 1949,
        isbn: '9788423325474',
        imagenPortada: milnovecientos,
        sinopsis: '1984 es una novela política de George Orwell que describe un futuro distópico.',
        criticas: ['Clásico atemporal', 'Relevante en la actualidad'],
        precioAlquiler: 0.50
      },
    {
      libroId: 3,
        nombre: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1967,
        isbn: '9788420471839',
        imagenPortada: cienanios,
        sinopsis: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez.',
        criticas: ['Obra maestra', 'Narrativa única'],
        precioAlquiler: 0.20
      },
      {
        libroId: 4,
        nombre: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        anioPublicacion: 1997,
        isbn: '9788478884459',
        imagenPortada: harryPotterFilosofal,
        sinopsis: 'Harry Potter y la piedra filosofal es el primer libro de la serie de J.K. Rowling.',
        criticas: ['Magia envolvente', 'Adecuado para todas las edades'],
        precioAlquiler: 0.14
      },
      {
        libroId: 5,
        nombre: 'To Kill a Mockingbird',
        autor: 'Harper Lee',
        anioPublicacion: 1960,
        isbn: '9780061120084',
        imagenPortada: killMockingbird,
        sinopsis: 'To Kill a Mockingbird is a novel by Harper Lee that has become a classic of modern American literature.',
        criticas: ['Profound and moving', 'Addresses important social issues'],
        precioAlquiler: 0.22
      },
      {
        libroId: 6,
        nombre: 'The Great Gatsby',
        autor: 'F. Scott Fitzgerald',
        anioPublicacion: 1925,
        isbn: '9780743273565',
        imagenPortada: gatsby,
        sinopsis: 'The Great Gatsby is a novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island.',
        criticas: ['Captivating storytelling', 'Reflects the Roaring Twenties'],
        precioAlquiler: 0.45
      },
      {
        libroId: 7,
        nombre: 'One Hundred Years of Solitude',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1967,
        isbn: '9780061120085',
        imagenPortada: oneHundred,
        sinopsis: 'One Hundred Years of Solitude is a landmark novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family in the fictional town of Macondo.',
        criticas: ['Magical realism at its best', 'Rich and imaginative storytelling'],
        precioAlquiler: 0.65
      },
      {
        libroId: 8,
        nombre: 'The Catcher in the Rye',
        autor: 'J.D. Salinger',
        anioPublicacion: 1951,
        isbn: '9780316769480',
        imagenPortada: theChater,
        sinopsis: 'The Catcher in the Rye is a novel by J.D. Salinger, narrated by the protagonist Holden Caulfield, who is a teenager living in an unspecified institution.',
        criticas: ['A classic of modern literature', 'Captures teenage angst'],
        precioAlquiler: 0.40
      },
      {
        libroId: 9,
        nombre: 'Pride and Prejudice',
        autor: 'Jane Austen',
        anioPublicacion: 1813,
        isbn: '9780141439518',
        imagenPortada: prideAndPrejuice,
        sinopsis: 'Pride and Prejudice is a romantic novel by Jane Austen, which follows the experiences of Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.',
        criticas: ['Timeless romance', 'Witty social commentary'],
        precioAlquiler: 0.43
      },
      {
        libroId: 10,
        nombre: 'The Hobbit',
        autor: 'J.R.R. Tolkien',
        anioPublicacion: 1937,
        isbn: '9780261102217',
        imagenPortada: hobbit,
        sinopsis: 'The Hobbit, or There and Back Again is a fantasy novel by J.R.R. Tolkien, which tells the story of Bilbo Baggins, a hobbit who is reluctant to embark on an adventure but finds himself drawn into a quest to reclaim a stolen treasure.',
        criticas: ['Masterpiece of fantasy literature', 'A journey of self-discovery'],
        precioAlquiler: 0.65
      },
      {
        libroId: 11,
        nombre: 'The Lord of the Rings',
        autor: 'J.R.R. Tolkien',
        anioPublicacion: 1954,
        isbn: '9780618640157',
        imagenPortada: lordRings,
        sinopsis: 'The Lord of the Rings is an epic high-fantasy novel by J.R.R. Tolkien, set in the world of Middle-earth and follows the quest to destroy the One Ring.',
        criticas: ['A monumental achievement', 'Defines modern fantasy literature'],
        precioAlquiler: 0.34
      },
      {
        libroId: 12,
        nombre: 'The Da Vinci Code',
        autor: 'Dan Brown',
        anioPublicacion: 2003,
        isbn: '9780307277671',
        imagenPortada: daVinciCode,
        sinopsis: 'The Da Vinci Code is a mystery thriller novel by Dan Brown that follows symbologist Robert Langdon as he investigates a murder at the Louvre Museum and discovers a series of cryptic codes and symbols.',
        criticas: ['Intriguing and fast-paced', 'Controversial but engaging'],
        precioAlquiler: 0.48
      },
      {
        libroId: 13,
        nombre: 'The Hitchhiker\'s Guide to the Galaxy',
        autor: 'Douglas Adams',
        anioPublicacion: 1979,
        isbn: '9780345391803',
        imagenPortada: hitchhieker,
        sinopsis: 'The Hitchhiker\'s Guide to the Galaxy is a comic science fiction series created by Douglas Adams, following the misadventures of an unwitting human, Arthur Dent, as he travels through space with an alien friend.',
        criticas: ['Hilarious and thought-provoking', 'Cult classic'],
        precioAlquiler: 0.59
      },
      {
        libroId: 14,
        nombre: 'The Alchemist',
        autor: 'Paulo Coelho',
        anioPublicacion: 1988,
        isbn: '9780061122415',
        imagenPortada: alchimist,
        sinopsis: 'The Alchemist is a philosophical novel by Brazilian author Paulo Coelho, which follows a young Andalusian shepherd named Santiago on his journey to Egypt.',
        criticas: ['Inspiring and spiritual', 'A journey of self-discovery'],
        precioAlquiler: 0.34
      },
      {
        libroId: 15,
        nombre: 'The Girl with the Dragon Tattoo',
        autor: 'Stieg Larsson',
        anioPublicacion: 2005,
        isbn: '9780307269751',
        imagenPortada: girlDragon,
        sinopsis: 'The Girl with the Dragon Tattoo is a psychological thriller novel by Swedish author and journalist Stieg Larsson, which follows investigative journalist Mikael Blomkvist and hacker Lisbeth Salander as they uncover dark secrets in Sweden.',
        criticas: ['Compelling mystery', 'Complex and intriguing characters'],
        precioAlquiler: 0.49
      },
      {
        libroId: 16,
        nombre: 'Brave New World',
        autor: 'Aldous Huxley',
        anioPublicacion: 1932,
        isbn: '9780060850524',
        imagenPortada: BraveNewWorld,
        sinopsis: 'Brave New World is a dystopian novel by Aldous Huxley, exploring a futuristic society where citizens are conditioned to conform and live in a stable but oppressive environment.',
        criticas: ['Thought-provoking social commentary', 'Predictive of societal trends'],
        precioAlquiler: 0.32
      },
      {
        libroId: 17,
        nombre: 'Luces de bohemia esperpento',
        autor: 'Valle-Inclán, Ramón del',
        anioPublicacion: 1961,
        isbn: '9788423913077',
        imagenPortada: lucesBohemia,
        sinopsis: 'Al degradarse la realidad aparece la farsa y, en un segundo nivel, el esperpento; Los héroes clásicos reflejados en los espejos cóncavos dan el Esperpento, aclara Valle-Inclán.Aquí el espejo cóncavo es una conci encia dolorida, una conciencia moral que escandaliza o aterra. Resulta patético que quien vea la verdad sea un ciego, Max Estrella, soñador perdido en un Madrid absurdo y hambriento.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.67
      },
      {
        libroId: 18,
        nombre: 'La Rusia olvidada',
        autor: 'Anton Chéjov',
        anioPublicacion: 1967,
        isbn: '1729788913077',
        imagenPortada: rusiOlvidada,
        sinopsis: '"Rusia Olvidada" es una historia de redención en la vastedad helada de Siberia. Un exiliado, Ivan, busca redescubrir su identidad perdida mientras lucha contra los elementos y sus propios demonios internos. A través de encuentros con almas olvidadas, descubre la fuerza de la conexión humana y la posibilidad de renacer en medio del abandono. En un paisaje donde el tiempo se desvanece, Ivan encuentra la esperanza perdida en las palabras olvidadas de aquellos que una vez llamaron hogar.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.77
      },
      {
        libroId: 19,
        nombre: 'Ensayo sobre la ceguera',
        autor: 'JOSÉ SARAMAGO',
        anioPublicacion: 2009,
        isbn: '788913077987',
        imagenPortada: ensayoCeguera,
        sinopsis: 'A driver waiting at a red light suddenly becomes blind. So does his wife and the doctor who examines them. They are the first cases of an epidemic of blindness. A magnificent parable of loss and disorientation, a vivid evocation of the horrors of the twentieth century, and a terrifying allegory of the dark times of the new millennium, Blindness masterfully portrays mans worst appetites and weaknesses and mans ultimately exhilarating spirit. N° de ref. del artículo 19191',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 21,
        nombre: 'Un mundo feliz',
        autor: 'Huxley, Aldous',
        anioPublicacion: 1927,
        isbn: '30777889187',
        imagenPortada: mundoFeliz,
        sinopsis: 'Un mundo feliz" es una novela distópica escrita por Aldous Huxley y publicada en 1932. La historia se desarrolla en un futuro utópico, pero oscuro, donde la sociedad está organizada en torno a la estabilidad y la felicidad superficial, logradas mediante la supresión de la individualidad y la manipulación genética.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.83
      },
      {
        libroId: 22,
        nombre: 'Frankenstein',
        autor: 'Mary W Shelley',
        anioPublicacion: 1957,
        isbn: '91873077788',
        imagenPortada: Frankenstein,
        sinopsis: 'Frankenstein; or, The Modern Prometheus" es una novela escrita por Mary Shelley y publicada por primera vez en 1818. La obra es considerada como una de las primeras novelas de ciencia ficción y ha dejado una marca duradera en la cultura popular. La historia se centra en Victor Frankenstein, un científico obsesionado con la idea de crear vida. Utilizando la ciencia y la alquimia, Frankenstein logra dar vida a una criatura, pero se horroriza al darse cuenta de la apariencia repulsiva de su creación.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.50
      },
      {
        libroId: 24,
        nombre: 'Madame Bovary',
        autor: 'Flaubert, Gustave',
        anioPublicacion: 1999,
        isbn: '999341873077788',
        imagenPortada: Madame,
        sinopsis: 'es una novela escrita por el autor francés Gustave Flaubert y publicada por primera vez en 1857. La obra es considerada un hito en la literatura realista y ha influido significativamente en la narrativa moderna. La historia se centra en Emma Bovary, una joven mujer que se casa con Charles Bovary, un médico de provincia.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.35
      },
      {
        libroId: 25,
        nombre: 'POETA EN NUEVA YORK',
        autor: 'FEDERICO GARCIA LORCA',
        anioPublicacion: 1857,
        isbn: '91873077788',
        imagenPortada: poetaNewYor,
        sinopsis: 'Esta obra es un poemario más extenso y complejo. Lorca experimenta con un lenguaje más surrealista y simbolista. Es una respuesta visceral a la experiencia del poeta durante su estancia en Nueva York.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.39
      },
      {
        libroId: 26,
        nombre: 'Los viajes de Gulliver.',
        autor: 'Jonathan Swift',
        anioPublicacion: 1971,
        isbn: '646478783077788',
        imagenPortada: ViajesGulliver,
        sinopsis: 'es una novela escrita por Jonathan Swift y publicada por primera vez en 1726. La obra, cuyo título completo es "Los viajes extraordinarios de Gulliver a tierras remotas", es una sátira que utiliza las peripecias del protagonista, Lemuel Gulliver, para realizar agudas críticas a la sociedad y la naturaleza humana de la época',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.29
      },
      {
        libroId: 27,
        nombre: 'El Aleph',
        autor: 'Jorge Luis Borges',
        anioPublicacion: 1972,
        isbn: '07778891873',
        imagenPortada: Aleph,
        sinopsis: 'es una colección de cuentos escrita por el autor argentino Jorge Luis Borges, publicada por primera vez en 1949. El cuento que da título a la colección, "El Aleph", es una de las piezas más destacadas de la obra y ha llegado a ser considerada como una de las obras maestras de Borges',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.73
      },
      {
        libroId: 28,
        nombre: 'Moby Dick',
        autor: 'Herman Melville; W.T. Robinson',
        anioPublicacion: 1997,
        isbn: '7162973077788',
        imagenPortada: Moby,
        sinopsis: 'Moby Dick" es una novela escrita por Herman Melville y publicada por primera vez en 1851. La obra es considerada una de las grandes novelas americanas y una obra maestra de la literatura mundial. Aquí hay un resumen general de "Moby Dick.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.82
      },
      {
        libroId: 29,
        nombre: 'Orgullo Y Prejuicio',
        autor: 'Austen, Jane',
        anioPublicacion: 1977,
        isbn: '9307718733788',
        imagenPortada: OrgulloPrejuicio,
        sinopsis: 'Orgullo y prejuicio, es una novela escrita por Jane Austen y publicada por primera vez en 1813. Es una de las obras más conocidas y amadas de la literatura inglesa. Aquí hay un resumen general:.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.48
      },
      {
        libroId: 30,
        nombre: 'El laberinto de la soledad',
        autor: 'Paz, Octavio',
        anioPublicacion: 1957,
        isbn: '9743773077788',
        imagenPortada: LaberintoSoledad,
        sinopsis: 'Frankenstein; or, The Modern Prometheus" es una novela escrita por Mary Shelley y publicada por primera vez en 1818. La obra es considerada como una de las primeras novelas de ciencia ficción y ha dejado una marca duradera en la cultura popular. La historia se centra en Victor Frankenstein, un científico obsesionado con la idea de crear vida. Utilizando la ciencia y la alquimia, Frankenstein logra dar vida a una criatura, pero se horroriza al darse cuenta de la apariencia repulsiva de su creación.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 31,
        nombre: 'Tala',
        autor: 'de Gabriela Mistral',
        anioPublicacion: 1957,
        isbn: '918730753477788',
        imagenPortada: tala,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 32,
        nombre: 'A sangre fría',
        autor: 'de Truman Capote',
        anioPublicacion: 1957,
        isbn: '91873077722388',
        imagenPortada: sangreFria,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 33,
        nombre: 'La isla del tesoro',
        autor: 'Robert Louis Stevenson',
        anioPublicacion: 1957,
        isbn: '918730777456788',
        imagenPortada: islaTesoro,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 34,
        nombre: 'Guillermo Tell',
        autor: 'Friedrich Schiller',
        anioPublicacion: 1957,
        isbn: '9187307337788',
        imagenPortada: guillermoTel,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 35,
        nombre: 'El túnel',
        autor: 'Ernesto Sábato',
        anioPublicacion: 1957,
        isbn: '52524430777788',
        imagenPortada: tunel,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 36,
        nombre: 'Lo que el viento se llevó',
        autor: 'Margaret Mitchell',
        anioPublicacion: 1957,
        isbn: '88655227788',
        imagenPortada: vientoLlevo,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 37,
        nombre: 'Las uvas de la ira',
        autor: 'John Steinbeck',
        anioPublicacion: 1957,
        isbn: '7744307711788',
        imagenPortada: uvasIra,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 38,
        nombre: 'El viejo y el mar',
        autor: 'Ernest Hemingway',
        anioPublicacion: 1957,
        isbn: '7791873077676788',
        imagenPortada: viejomar,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 39,
        nombre: 'La guerra del fin del mundo',
        autor: 'Mario Vargas Llosa',
        anioPublicacion: 1957,
        isbn: '97718730766788',
        imagenPortada: guerraFinMundo,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 40,
        nombre: 'Demian',
        autor: 'Hermann Hesse',
        anioPublicacion: 1957,
        isbn: '669187307327788',
        imagenPortada: demian,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 41,
        nombre: 'Ulises',
        autor: 'Joyce',
        anioPublicacion: 1957,
        isbn: '551873077765488',
        imagenPortada: ulises,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 42,
        nombre: 'La Eneida',
        autor: 'Virgilio',
        anioPublicacion: 1957,
        isbn: '5591873073456237788',
        imagenPortada: eneida,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 43,
        nombre: 'Grandes esperanzas',
        autor: 'Charles Dickens',
        anioPublicacion: 1957,
        isbn: '449187307227788',
        imagenPortada: grandesExperanzas,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 44,
        nombre: 'Hamlet',
        autor: 'William Shakespeare',
        anioPublicacion: 1957,
        isbn: '33918730771788',
        imagenPortada: hamlet,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 45,
        nombre: 'Si esto es un hombre',
        autor: 'Primo Levi',
        anioPublicacion: 1957,
        isbn: '91873077611588',
        imagenPortada: siHombre,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 46,
        nombre: 'Al faro',
        autor: 'Virginia Woolf',
        anioPublicacion: 1957,
        isbn: '9187307433788',
        imagenPortada: faro,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 47,
        nombre: 'Diálogo',
        autor: 'Galileo Galilei',
        anioPublicacion: 1957,
        isbn: '9187307743452788',
        imagenPortada: imagenNoDisponible,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 48,
        nombre: 'La metamorfosis',
        autor: 'Franz Kafka',
        anioPublicacion: 1957,
        isbn: '32291873077788',
        imagenPortada: metamamorfosis,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 49,
        nombre: 'El guardián entre el centeno',
        autor: 'J.D. Salinger',
        anioPublicacion: 1957,
        isbn: '23451873077788',
        imagenPortada: guardianCenteno,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
      {
        libroId: 50,
        nombre: 'La colmena',
        autor: 'Camilo José Cela',
        anioPublicacion: 1957,
        isbn: '23452341873077788',
        imagenPortada: colmena,
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla..',
        criticas: [ 'Predictive of societal trends'],
        precioAlquiler: 0.80
      },
    
]

export default dataLibros;