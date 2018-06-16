const j1 = any(1, 2, 3)
console.log(j1)
console.log(j1.toString())

console.log(all(10, 20, 30) + j1)

const list = [2, 4, 6, 8]
if(all(...list) % 2 == 0) {
    console.log(`all ${ list } is divisable by 2`)
}

list.push(9)

if(all(...list) % 2 == 0)
    console.log(`all ${ list } is divisable by 2`)
else
    console.log(`not all ${ list } is divisable by 2`)

if(any(...list) % 2 == 0)
    console.log(`any ${ list } is divisable by 2`)

if(one(...list) % 2 == 1)
    console.log(`one ${ list } is not divisable by 2`)

if(none(...list) % 2 == 0)
    console.log(`none ${ list } is divisable by 2`)
else
    console.log(`not none ${ list } is divisable by 2`)

