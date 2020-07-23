const selectClub = () => {
    const selectList = document.querySelector('.club-select .clubs-list ul');
    const body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.club-select')) {
            selectList.style.display = 'block';
        } else {
            selectList.style.display = 'none';
        }
    });


};


export default selectClub;
