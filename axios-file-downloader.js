for (let i = 3; i < urls.length; i++) {
    let fileName = urls[i].querySelectorAll('td')[1].querySelector('a').getAttribute('href');
    let url = 'https://www.math.purdue.edu/~eremenko/dvi/' + fileName;
    axios({
        url: url,
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTLM element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', fileName); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });
}
