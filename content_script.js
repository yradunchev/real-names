walk(document.body);

function walk(node) 
{
        
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child ) 
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        handleText(node);
                        break;
        }
}

function handleText(textNode) 
{
        var v = textNode.nodeValue;

        v = v.replace(/\"Атака\"/g, "Батака");
        v = v.replace(/Сергей Станишев/g, "Серго Съсела");
        v = v.replace(/Станишев/g, "Съселов");
        v = v.replace(/Пламен Орешарски/g, "Пацо Оставкарски");
        v = v.replace(/Орешарски/g, "Осатвкарски");
        v = v.replace(/Волен Сидеров/g, "Болен Сайдеров");
        v = v.replace(/Сидеров/g, "Сайдеров");
        v = v.replace(/Николай Бареков/g, "Дуку Бюреков");
        v = v.replace(/Бареков/g, "Бюреков");
        v = v.replace(/Лютви Местан/g, "Лилав Фустан");
        v = v.replace(/Местан/g, "Фустан");
        v = v.replace(/БСП/g, "БКП");
        v = v.replace(/Българска Социалистическа Партия/g, "Българска Комунистическа Партия");
        v = v.replace(/Българска социалистическа партия/g, "Българска комунистическа партия");
        v = v.replace(/българска социалистическа партия/g, "българска комунистическа партия");
        v = v.replace(/Социалисти/g, "Комунисти");
        v = v.replace(/Социалистите/g, "Комунистите");
        v = v.replace(/социалисти/g, "комунисти");
        v = v.replace(/социалистите/g, "комунистите");
        v = v.replace(/АТАКА/g, "БАТАКА");
        v = v.replace(/Делян Пеевски/g, "Дебелян Беевски");
        v = v.replace(/Пеевски/g, "Беевски");
        v = v.replace(/Бойко Борисов/g, "Гойко Мухобойко");
        v = v.replace(/Борисов/g, "Мухобойко");
        v = v.replace(/Михаил Миков/g, "Михал Мишков");
        v = v.replace(/Миков/g, "Мишков");
        v = v.replace(/ГЕРБ/g, "ГЭРБ");
      
        textNode.nodeValue = v;
}
