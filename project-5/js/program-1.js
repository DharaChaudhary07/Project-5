let Color = ["Red", "Green", "White", "Black"];

    console.log(Color);

    console.log(Color.join(","));

    console.log(Color.join("+"));

    console.log(Color.slice(0, 3).join(","));

    console.log(Color[0]);

    console.log(Color.slice(1, 3).join(","));

    let addColor = Color.slice(); 
    addColor.push('orange');

    console.log(addColor.join(','));