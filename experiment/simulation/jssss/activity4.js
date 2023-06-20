var act4_table;
var act4_table_headings = [];
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    load_act4_table();
    pp.showtitle("To determine viscosity based on efflux time", 3);
    let activity5_formulae = `
        <p>Inside Diameter fo beaker D(cm) = 14</p>

        <p>Outside Radius of porous cell r2(cm) = 3.54</p>

        <p>Inside Radius of porous cell r1(cm) = 2.861</p>

        <p>N = total mass transferred (C1 - C2)</p>

        <p>Volume of water (V) = </p>

        <p>Height of Liquid (cm) = 12.62</p>



        <p>&Delta;C<sub>m</sub> = [(C1 - (C2 - C3))/ ln(C1 / (C1 - C3))]</p>

        <p>D<sub>L</sub> = (N x V x ln(r1/r2)) / 2 x &pi; x &Theta; h x &Delta;C<sub>m</sub></p>

    `;
    show_panel(3);
    pp.showdescription(activity5_formulae, 3);
}
function load_act4_table() {
    act4_table_headings = ["Sr No.", "Initial Height (cm) (hf)", "Final Height (cm) (hf)", "Time Elapsed (sec) (t)", "Viscosity of Liquid &mue; (c.p)", "check"];
    let verify_row = [["1", "25", "17", "158.11", `<input type="text"  id="inp-1">`, `<input type="submit" class="btn btn-primary" onclick="verify_act4();">`]];
    act4_table = new Table(act4_table_headings, verify_row);
    pp.addtoleftpannel(act4_table.template);
    act4_table.draw();
}
function verify_act4() {
    let val1 = document.getElementById(`inp-1`);
    if (!verify_values(parseFloat(val1.value), parseFloat(act4_table_data[0][4]))) {
        alert(`please check Viscosity value again`);
        return;
    }
    alert("Calculation is right!!");
    act4_table_headings.pop();
    act4_table = new Table(act4_table_headings, act4_table_data);
    act4_table.draw();
}
//# sourceMappingURL=activity4.js.map