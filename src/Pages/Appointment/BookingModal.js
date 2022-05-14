import React from 'react';

const BookingModal = ({ treatment }) => {

    const { name, slots } = treatment;

    return (
        <div>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    {/* close btn  */}
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* Modal body  */}
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    {/* modal button  */}
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;