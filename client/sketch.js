let img; // Declare variable 'img'.
const map = 'city-map.webp'
const bin = 'bin.png'
const collector = 'collector.png'

function preload() {
    map_img = loadImage(map) // Load the image
    bin_img = loadImage(bin)
    collector_img = loadImage(collector)
}

function setup() {
    // Displays the image at its actual size at point (0,0)
    createCanvas(windowWidth, windowHeight)

    image(map_img, 0, 0)

    rand = (max) => Math.floor(Math.random() * max)

    // bins display
    add_bin = createButton('add bin')
    add_bin.position(0, 0)
    add_bin.mousePressed(()=>{
        let add = prompt("Add a bin", JSON.stringify({}))
        if (add)
            if(confirm("Are you sure you want to add?")){
                console.log(JSON.parse(add))
                fetch('https://projecttrash.azurewebsites.net/bin/', {method: 'POST',body: JSON.parse(add)})
                    .then(response => response.json())
                    .then(data2 => console.log(data2))}
    })

    fetch('https://projecttrash.azurewebsites.net/bin')
        .then(response => response.json())
        .then(data => {
            data.forEach((element) => {

                let [x, y] = [rand(width-bin_img.width), rand(height-bin_img.height)]

                // display bin image
                image(
                    bin_img,
                    x,
                    y,
                    bin_img.width / 6,
                    bin_img.height / 6
                )

                // del bin button
                button1 = createButton('del')
                button1.position(x + bin_img.width / 8, y + bin_img.height / 8)
                button1.mousePressed(() => {
                     if(confirm("Are you sure you want to delete?"))
                        fetch(`https://projecttrash.azurewebsites.net/bin/${element._id}`, {method: 'DELETE'})
                            .then(response => response.json())
                            .then(data2 => console.log(data2))
                })

                // update bin button
                button2 = createButton('upd')
                button2.position(x - bin_img.width / 9.5, y + bin_img.height / 8)
                button2.mousePressed(() => {
                    let update = prompt("Update bin info", JSON.stringify(element))
                    if (update)
                        if(confirm("Are you sure you want to update?")){
                            console.log(JSON.parse(update))
                            fetch(`https://projecttrash.azurewebsites.net/bin/${element._id}`, {method: 'PUT',body: JSON.parse(update)})
                                .then(response => response.json())
                                .then(data2 => console.log(data2))}
                })

                // view bin info button
                button3 = createButton('view')
                button3.position(x - bin_img.width / 150, y - bin_img.height / 13)
                button3.mousePressed(() => {
                     alert(JSON.stringify(element, null, 2))
                })
            })
        })


// collectors display
add_collector = createButton('add collector')
add_collector.position(70, 0)
add_collector.mousePressed(()=>{
    let add = prompt("Add collector", JSON.stringify({}))
    if (add)
        if(confirm("Are you sure you want to add?")){
            console.log(JSON.parse(add))
            fetch('https://projecttrash.azurewebsites.net/collector/', {method: 'POST',body: JSON.parse(add)})
                .then(response => response.json())
                .then(data2 => console.log(data2))}
})

fetch('https://projecttrash.azurewebsites.net/collector')
    .then(response => response.json())
    .then(data => {
        data.forEach((element) => {

            let [x, y] = [rand(width-collector_img.width), rand(height-collector_img.height)]

            // display collector image
            image(
                collector_img,
                x,
                y,
                collector_img.width / 2,
                collector_img.height / 2
            )

            // del collector button
            button1 = createButton('del')
            button1.position(x + collector_img.width / 4, y + collector_img.height / 4)
            button1.mousePressed(() => {
                 if(confirm("Are you sure you want to delete?"))
                    fetch(`https://projecttrash.azurewebsites.net/collector/${element._id}`, {method: 'DELETE'})
                        .then(response => response.json())
                        .then(data2 => console.log(data2))
            })

            // update collector button
            button2 = createButton('upd')
            button2.position(x - collector_img.width / 4.75, y + collector_img.height / 4)
            button2.mousePressed(() => {
                let update = prompt("Update collector info", JSON.stringify(element))
                if (update)
                    if(confirm("Are you sure you want to update?")){
                        console.log(JSON.parse(update))
                        fetch(`https://projecttrash.azurewebsites.net/collector/${element._id}`, {method: 'PUT',body: JSON.parse(update)})
                            .then(response => response.json())
                            .then(data2 => console.log(data2))}
            })

            // view bin info button
            button3 = createButton('view')
            button3.position(x - collector_img.width / 75, y - collector_img.height / 13)
            button3.mousePressed(() => {
                 alert(JSON.stringify(element, null, 2))
            })
        })
    })


}