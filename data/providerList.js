// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to an empty array.
// ===============================================================================

var providers = {
    plumbers: "Uriel",
    electrician: "Mario",
    painter: "Angel",
    HVAC: "Tommy",
    contractor: "Breona"
};

// Note how we export the array. This makes it accessible to other files using require.
module.exports = providers;
