describe("Demo test", () => {
    test("testing toBe", () => {
        expect(1 + 1).toBe(2);
        expect(true).toBe(true);
        expect({}).not.toBe({});
    });

    test("testing toEqual", () => {
        const subject = { name: "Obi-wan Kenobi"};
        const actual = {
            name:"Obi-wan Kenobi"
        };
        expect(subject).toEqual(actual);
    
        const listOfApperentices = [
            {name: "Anakin Skywalker"},
            {name: "Count Dooku"},
            {name: "Luke Skywalker"}
        ];
        const listactual = [
            {name: "Anakin Skywalker"},
            {name: "Count Dooku"},
            {name: "Luke Skywalker"}
        ];
        expect(listOfApperentices).toEqual(listactual);
    });

    test("testing toMatchObject", () => {
        const subject = { name: "Obi-wan Kenobi"};
        const actual = {
            name: "Obi-wan Kenobi"
        };
        expect(subject).toMatchObject(actual);

        const listOfApperentices = [
            {name: "Anakin Skywalker"},
            {name: "Count Dooku"},
            {name: "Luke Skywalker"}
        ];
        const listactual = [
            {name: "Anakin Skywalker"},
            {name: "Count Dooku"},
            {name: "Luke Skywalker"}
        ];
        expect(listOfApperentices).toMatchObject(listactual);
    });

});