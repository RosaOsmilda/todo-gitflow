# To-Do List - Git Flow

Proyecto CRUD simple de lista de tareas, desarrollado como practica de la metodologia Git Flow para la Tarea 3 de Programacion III.

## Descripcion

Aplicacion de lista de tareas (to-do list) hecha con HTML, CSS y JavaScript puro, que permite:

- Crear nuevas tareas
- Mostrar las tareas guardadas
- Marcar tareas como completadas
- Guardar la informacion en el navegador (localStorage)
- Mostrar la fecha de creacion de cada tarea

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Git y Git Flow

## Flujo de trabajo (Git Flow)

Este proyecto se desarrollo siguiendo la metodologia Git Flow, con las siguientes ramas:

- **main**: rama de produccion, contiene el codigo final integrado
- **dev**: rama de integracion del desarrollo
- **qa**: rama de control de calidad

### Ramas de trabajo (features y hotfix)

1. **feature/setup-project**: estructura base del proyecto (HTML y CSS)
2. **feature/create-task**: funcionalidad para agregar nuevas tareas
3. **feature/read-task**: funcionalidad para mostrar las tareas guardadas
4. **feature/update-task**: funcionalidad para marcar tareas como completadas
5. **hotfix/fix-date-format**: correccion del formato de fecha en las tareas

Cada rama genero 3 Pull Requests (hacia dev, qa y main), cumpliendo con un total de 15 Pull Requests cerrados.

## Como usar el proyecto

1. Clona el repositorio
2. Abre el archivo index.html en tu navegador
3. Escribe una tarea en el campo de texto y presiona "Agregar" o Enter
4. Haz clic sobre una tarea para marcarla como completada

## Autor

RosaOsmilda 
Matricula: 2024-2426
