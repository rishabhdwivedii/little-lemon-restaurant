import './Testimonial.css';
import customer1Image from '../assets/customer1.png';
import customer2Image from '../assets/customer2.png';
import customer3Image from '../assets/customer3.png';
import customer4Image from '../assets/customer4.png';

function Testimonial() {
  const testimonials = [
    {
      name: 'Customer 1',
      review: 'Review from Customer 1',
      image: customer1Image,
    },
    {
      name: 'Customer 2',
      review: 'Review from Customer 2',
      image: customer2Image,
    },
    {
      name: 'Customer 3',
      review: 'Review from Customer 3',
      image: customer3Image,
    },
    {
      name: 'Customer 4',
      review: 'Review from Customer 4',
      image: customer4Image,
    },
  ];

  return (
    <div className='test-container'>
    <h2 className='heading'>Testimonials</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div className="card" key={index}>
          <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
          <p className="customer-review">{testimonial.review}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonial;

