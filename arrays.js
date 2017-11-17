var countries = [
    "Chad", "Cuba","Greenland", "Iraq", "Mali", "Oman",  "India"
]
countries.push("fiji")
countries.splice(6,1)
countries.splice(4,0,"Iran")
countries.reverse()
countries.splice(2,1,"Togo")
countries.push("Laos")
countries.reverse()
countries.unshift("Peru")

console.log(countries)
    