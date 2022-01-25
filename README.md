# Тестовое задание

## Используемый стэк: NextJS, MUI

#### Задача 1. 
Создай компонент (./src/components/CardContent.tsx) на основе MuiCardContent с дополнительными пропсами: title и icon. 
#### Задача 2.
Сверстай страницу (./pages/index.tsx), используя макет, входные данные и обязательно компоненты MuiGrid, MuiCard и CardContent из Задания 1 (дополнительно использовать какие-либо другие не запрещено). Есть одно условие: необходимо использовать CardContent следующим образом: <CardContent component={Grid} …> … </CardContent > 
#### Задача 3. 
Задай отступы между карточками разные по высоте и ширине.
#### Задача 4.
Сделай дубликат страницы (./pages/index.tsx > ./pages/svg.tsx), используя теперь MuiSvgIcon вместо ссылки на картинку. 
#### Задача 5. 
На странице (./pages/svg.tsx) добавь модальное окно, которое открывается при клике на MuiCard и содержит description из входных данных. 
#### Задача 6. 
Создай алиас @components и измени импорт компонента CardContent с ./src/components/CardContent на @components/CardContent