
export const logHireMeAscii = (darkMode = false) => {
    console.log('%c \n' +
        ' /$$   /$$           /$$ /$$                 /$$      /$$                     /$$       /$$\n' +
        '| $$  | $$          | $$| $$                | $$  /$ | $$                    | $$      | $$\n' +
        '| $$  | $$  /$$$$$$ | $$| $$  /$$$$$$       | $$ /$$$| $$  /$$$$$$   /$$$$$$ | $$  /$$$$$$$\n' +
        '| $$$$$$$$ /$$__  $$| $$| $$ /$$__  $$      | $$/$$ $$ $$ /$$__  $$ /$$__  $$| $$ /$$__  $$\n' +
        '| $$__  $$| $$$$$$$$| $$| $$| $$  \\ $$      | $$$$_  $$$$| $$  \\ $$| $$  \\__/| $$| $$  | $$\n' +
        '| $$  | $$| $$_____/| $$| $$| $$  | $$      | $$$/ \\  $$$| $$  | $$| $$      | $$| $$  | $$\n' +
        '| $$  | $$|  $$$$$$$| $$| $$|  $$$$$$/      | $$/   \\  $$|  $$$$$$/| $$      | $$|  $$$$$$$\n' +
        '|__/  |__/ \\_______/|__/|__/ \\______/       |__/     \\__/ \\______/ |__/      |__/ \\_______/\n' +
        '                                                                                           \n', `color: ${darkMode ? 'rgba(255, 255, 255, 0.7)' : '#140033'}`)
    console.log('%cSoftware development as we know it is changing rapidly! More than ever, you need someone on your team who can adapt, learn quickly and continue to bring fresh ideas to the table.', `color: ${darkMode ? 'rgba(255, 255, 255, 0.7)' : '#140033'}`)
    console.log('%cTime is money; You\'ve made it this far, let\'s setup an interview.', 'background-color: #b65296; color: #ffffff; font-weight: bold')
    console.log('\t%cOthneil Drew - Full Stack Developer (Houston, TX | Remote)', 'font-weight: bold')
    console.log(
        '\t  -> Resume: https://othneildrew.com/resume\n' +
        '\t  -> LinkedIn: https://linked.com/in/othneildrew\n' +
        '\t  -> Email: othneild@gmail.com\n'
    )
}