var act4_table;
var act4_table_headings = [];
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    load_act4_table();
    pp.showtitle(`<p id="exp-title">To determine viscosity based on efflux time</p>`, 3);
    let activity5_formulae = `
        <p>Inside Diameter fo beaker D(cm) = 14</p>

        <p>Outside Radius of porous cell r2(cm) = 3.54</p>

        <p>Inside Radius of porous cell r1(cm) = 2.861</p>

        <p>N = total mass transferred (C1 - C2)</p>

        <p>Volume of water (V) = </p>

        <p>Height of Liquid (cm) = 12.62</p>



        <p>$$ &Delta;C_m = \\frac{(C1- (C2-C3))}{ln({\\frac{C1}{C1-C3}})} $$</p>

        <p>$$ D_L = \\frac{N\× V \× ln(\\frac{r1}{r2})}{2 \× \π \×  Θ  h \× &Delta;C_m} $$</p>

    `;
    show_panel(3);
    //  pp.showdescription(activity5_formulae, 3);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 3%; font-weight: 500; font-size: calc(1vw + 5px);">${activity5_formulae}</div>`, 3);
    MathJax.typeset();
}
function load_act4_table() {
    act4_table_headings = ["Sr No.", "Initial Height (cm) (hf)", "Final Height (cm) (hf)", "Time Elapsed (sec) (t)", "Viscosity of Liquid &mu; (c.p)", "check"];
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