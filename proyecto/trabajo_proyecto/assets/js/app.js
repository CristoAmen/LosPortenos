/**
 * app.js
 * @author Delgado Elenes Cristofher
 * 20200403
 * Código JS del sistema
 */

 /**
  * Traducciones del sistema
  */

  // Español
  translate.add({
    pages: {
        home: {
            title: 'Los Porteños',
            welcome: 'Bienvenidos al portal',
           
            // NavBar
            acerca: 'Acerca de',
            menu: 'Menú',
            contactanos: 'Contáctanos',
            
            // index
            visitanos: '¡Visitanos en nuestra sucursal!',
            notRec:'NOTICIAS RECIENTES',
           
            // NOTICIA 1 (TÍTULO Y TEXTO)
            notTitle1:'El mes de febrero de año en curso obtuvimos excelentes resultados financieros...',
            notText1:'El cambio fue drástico comparando las ventas de las fechas en las que se llevan a cabo las costumbres del puerto a las de las fechas actuales, el turismo está escaso y los mazatlecos lo saben.',
            
            // NOTICIA 2 (TÍTULO Y TEXTO)
            notTitle2:'¡Estamos tomando las medidas recurrentes!',
            notText2:'Tu salud es lo mas importante para nosotros.',
           
            // FRASE 1 (TÍTULO Y TEXTO)
             frasNo1: '"Entre más rápido genere confianza, más rápido generará una venta"',
             frasAutNo1: 'Marcadeo',
            
             // FRASE 2 (TÍTULO Y TEXTO)
             frasNo2: '"El éxito de un negocio descansa en las ventas: El matrimonio temporario entre empresa y cliente"',
             frasAutNo2: 'Tom Peters',
             notTime2:'Hace 15 días',

             // NOTICIA 3 (TÍTULO Y TEXTO)
             notTitle3:'Situación alarmante',
             notText3:'Han disminuido las ventas con el Coronavirus.',
             notTime3:'Hace 5 días',

             // FRASE 3 (TÍTULO Y TEXTO)
             frasNo3: '"La clave es marcar expectativas del cliente realistas y luego no solo satisfacerlas, sino superarlas. De preferencia en formas inesperadas y útiles"',
             frasAutNo3: 'Richard Branson',

             // NOTICIA 4 (TÍTULO Y TEXTO)
             notTitle4:'En busca de personal ¡Llámanos, estamos contratando!',
             notText4:'Excelente ambiente laboral.',
             notTime4:'Hace 20 días',

             //------------------------------------------------------------------------------
             //CONTACTANOS
            
             alumno:'Alumno',
             alumno1:'Alumno',
             alumno2:'Alumno',
             alumno3:'Alumno',
             alumno4:'Alumno',

             name:'Nombre',
             name1:'Nombre',
             name2:'Nombre',
             name3:'Nombre',
             name4:'Nombre',

             matri:'Matricula',
             matri1:'Matricula',
             matri2:'Matricula',
             matri3:'Matricula',
             matri4:'',

             group: 'Grupo',
             group1: 'Grupo',
             group2: 'Grupo',
             group3: 'Grupo',
             group4: 'Grupo',

             especialidad: 'Especialidad',
             especialidad1: 'Especialidad',
             especialidad2: 'Especialidad',
             especialidad3: 'Especialidad',
             especialidad4: 'Especialidad',

             contactar:'Contactar',
             contactar1:'Contactar',
             contactar2:'Contactar',
             contactar3:'Contactar',
             contactar4:'Contactar',

             //------------------------------------------------------------------------------
             //ACERCA DE

              //HISTORIA 

             histTit: 'Nuestra historia',
             hist: 'Te pondremos en contexto con nosotros y nuestra casa restaurante de mariscos y bebidas “Los Porteños” contándote un poco acerca de nuestra historia; la idea surgió de una manera inesperada,el pensamiento fue inaugurar un negocio de comidas o mariscos en el puerto de Mazatlán Sinaloa México, ¡y que mejor que frente al mar! contemplando siempre la comodidad y satisfacción de los que serían nuestros próximos clientes. El nombre fue inspirado en una banda también mazatleca con ya varios años  de trayectoria. Pusimos en marcha este proyecto a principios de Enero en el año 2015,instalándonos a la orilla del mar sobre el boulevard del malecón de Mazatlán.',
            
              // VISIÓN
             
              vision: 'Visión',
              vision1: 'Ser más conocidos y recomendados por brindar a nuestros clientes una atención agradable y momentos felices.',
              vision2: 'Contribuir y aportar nuestro granito de arena, a nuestra gente de Mazatlán.',   
              vision3: 'Que nuestro restaurante rinda frutos y brinde un mejor futuro a nuestras próximas generaciones.',      
                 
              // MISION

              misionTit: 'Nuestra Misión',
              misionText: 'Somos un establecimiento dedicado a brindar momentos inolvidables y servicios alimenticios bastante agradables, ponemos todo nuestro máximo empeño a beneficio de nuestros clientes Así mismo mejoramos cada día para lograr que nuestros clientes visitantes se lleven un buen recuerdo, y el personal de igual manera quedar satisfechos por los buenos resultados que esto genere.'  
               
              
        },
        about: {
            title: 'Nosotros'
        }
    },
    generic: {
        ok: 'ACEPTAR',
        cancel: 'CANCELAR'
    }
  },'es');

    // *********************************************************************************************************************************************
    // Inglés
    translate.add({
        pages: {
            home: {
                title: 'The Porteños',
                welcome: 'Welcome to the website',
                
                // NavBar
                
                acerca: 'About us',
                menu: 'Menu',
                contactanos: 'Contact us',
               
                // index
                visitanos: 'Visit us at our branch!',
                notRec:'RECENT NEWS',
                
                // NOTICIA 1 (TITULO Y TEXTO)
                notTitle1: 'The month of February of the current year we obtained excellent financial results... ',
                notText1:'The change was drastic comparing sales of the dates on which the customs of the port are carried out to those of the current dates,tourism is scarce and the mazatlecos know it.',
               
                // NOTICIA 2 (TÍTULO Y TEXTO)
                notTitle2:'We are taking the recurrent measures!',
                notText2:'Your health is the most important thing for us.',
                notTime2:'15 days ago',

                // FRASE 1 (TÍTULO Y TEXTO)
                frasNo1: '"The faster you build trust, the faster you"',
                frasAutNo1: 'Marcadeo',

                // FRASE 2 (TÍTULO Y TEXTO)
                frasNo2: '"The success of a business rests on sales: Temporary marriage between company and customer"',
                frasAutNo2: 'Tom Peter',

                // NOTICIA 3 (TÍTULO Y TEXTO)
                notTitle3:'Alarming situation',
                notText3:'Sales with Coronavirus have declined.',
                notTime3:'5 days ago',

                // FRASE 3 (TÍTULO Y TEXTO)
                frasNo3: '"The key is to set realistic customer expectations and then not just meet them, but exceed them. Preferably in unexpected and useful ways"',
                frasAutNo3: 'Richard Branson',

                // NOTICIA 4 (TÍTULO Y TEXTO)
                notTitle4:'Looking for staff Call us, we are hiring!',
                notText4:'Excellent work environment.',
                notTime4:'20 days ago',

             //------------------------------------------------------------------------------
             //CONTACTANOS
            
                alumno:'Student',
                alumno1:'Student',
                alumno2:'Student',
                alumno3:'Student',
                alumno4:'Student',
                
                name:'Name',
                name1:'Name',
                name2:'Name',
                name3:'Name',
                name4:'Name',

                matri:'Registration',
                matri1:'Registration',
                matri2:'Registration',
                matri3:'Registration',
                matri4:'Registration',

                group: 'Group',
                group1: 'Group',
                group2: 'Group',
                group3: 'Group',
                group4: 'Group',

                especialidad: 'Specialty',
                especialidad1: 'Specialty',
                especialidad2: 'Specialty',
                especialidad3: 'Specialty',
                especialidad4: 'Specialty',

                contactar:'Contact',
                contactar1:'Contact',
                contactar2:'Contact',
                contactar3:'Contact',
                contactar4:'Contact',

            //------------------------------------------------------------------------------
             //ACERCA DE    

                // HISTORIA

                histTit: 'Our story',
                hist:'¿Well put you in context with us and our seafood and drinks restaurant house "Los Porteños" telling you a little bit about our history; the idea came up in an unexpected way, the thought was to open a food or seafood business in the port of Mazatlan Sinaloa Mexico, And better than facing the sea! always contemplating the comfort and satisfaction of those who would be our next customers. The name was inspired by a band also mazatleca with several years old trajectory. We launched this project in early January in 2015, installing us by the sea shore on the boulevard of the mazatlan boardwalk.',
                
                // VISION
             
                vision: 'Vision', 
                vision1: 'To be better known and recommended for providing our customers with pleasant attention and happy moments.',
                vision2: 'Contribute and contribute our grain of sand, to our people of Mazatlan.',   
                vision3: 'May our restaurant pay off and bring a better future to our next generations.',     
                
                // MISION

                misionTit: 'Our mission',
                misionText: 'We are an establishment dedicated to providing unforgettable moments and quite pleasant food services, we put all our best efforts for the benefit of our customers. We also improve every day to get our visiting customers to remember, and the staff in the same way be satisfied by the good results that this generates.',
            
            
            
            },
            about: {
                title: 'About us'
            }

            
        },
        generic: {
            ok: 'OK',
            cancel: 'CANCEL'
        }
      },'en');

