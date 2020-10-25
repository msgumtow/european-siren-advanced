/**
 * In a "forever" loop
 * 
 * Place a "while" loop with the condition (light level greater than/equal to 200) replacing "true."
 * 
 * Inside the while loop,
 * 
 * Play note C
 * 
 * Plot an LED at 2,2
 * 
 * Play note F
 * 
 * Unplot the LED at 2,2
 * 
 * MODIFICATION SUGGESTION:
 * 
 * Change LED placements or add more
 */
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
