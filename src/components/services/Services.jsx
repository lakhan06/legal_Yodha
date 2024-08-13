import { useState } from "react";
import "./Services.css";
import 'animate.css';
import { Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const StartBusinessData = [
    {
        title: 'Private Limited Company Registration',
        price: '₹8000/-',
        features: [
            'Suitable for startups',
            'Separate Legal Entity',
            'Limited Liability Protection',
            'Easy to raise funds or loans',
            'Modern Compliances'
        ]
    },
    {
        title: 'Limited Liability Partnership Registration',
        price: '₹5500/-',
        features: [
            'Suitable for small Businesses',
            'Limited Liability Protection',
            'Minimum Requirement: 2 Partners',
            'Less Compliances'
        ]
    },
    {
        title: 'Section NPO Registration',
        price: '₹9000/-',
        features: [
            'Suitable for social welfare',
            'Limited Liability Protection',
            'Tax Benefits',
            'Minimum Requirement: 2 Directors'
        ]
    }
];

const RegistrationData = [
    {
        title: 'GST Registration',
        price: '₹900/-',
        features: [
            'For service providers with turnover ≥ 20 lakh',
            'For goods suppliers with turnover ≥ 40 lakh',
            'Voluntary registration available',
            'Composition scheme registration',
            'Enables input tax credit benefit'
        ]
    },
    {
        title: 'FSSAI Registration',
        price: '₹2000/-',
        features: [
            'Mandatory for food service providers',
            'Ensures compliance with food safety standards',
            'Voluntary registrations allowed',
            'License Validity (1-5 yrs.)',
            'Key for food product marketability'
        ]
    },
    {
        title: 'ISO Certificate',
        price: '₹6000',
        features: [
            'International quality certification',
            'Enhances product/service credibility',
            'Compliance with global standards',
            'Improves market access'
        ]
    },
    {
        title: 'Import Export Code (IEC)',
        price: '₹2000/-',
        features: [
            'Essential for import/export businesses',
            'Unique identification code for international trade',
            'Mandatory for customs clearance',
            'Enables global trade participation'
        ]
    }
];


const TrademarkData = [
    {
        title: 'Trademark Registration',
        price: '₹7000/-',
        features: [
            'Trademark search and filing',
            'Application processing',
            'Consultation with experts',
            'Status tracking',
            'Issue resolution'
        ]
    },
    {
        title: 'Copyright Registration',
        price: '₹4000/-',
        features: [
            'Copyright search and filing',
            'Application processing',
            'Consultation with IP specialists',
            'Status updates',
            'Resolution of issues'
        ]
    },
    {
        title: 'Design Registration',
        price: '₹8000/-',
        features: [
            'Design search and filing',
            'Application processing',
            'Expert consultation on design rights',
            'Tracking of application status',
            'Resolution of design-related issues'
        ]
    }
];

const IncomeTaxData = [
    {
        title: 'Income Tax Return',
        price: '₹500/-',
        features: [
            'Individual or business tax filing',
            'Tax computation and planning',
            'Audit and compliance',
            'Tax-saving strategies',
            'Consultation with tax experts'
        ]
    },
    {
        title: 'GST Return Filing',
        price: '₹500/-',
        features: [
            'Monthly or quarterly GST return filing',
            'Input tax credit reconciliation',
            'GST audit and compliance',
            'GST refund assistance',
            'Consultation with GST experts'
        ]
    },
    {
        title: 'TDS Return',
        price: '₹1000/-',
        features: [
            'TDS deduction and filing',
            'Form 16 generation',
            'TDS reconciliation and compliance',
            'TDS refund assistance',
            'Consultation with tax experts'
        ]
    },
    {
        title: 'Income Tax Notice',
        price: '₹4000',
        features: [
            'Representation for income tax notices',
            'Assessment and response strategy',
            'Appeal and litigation support',
            'Resolution of tax disputes',
            'Consultation with tax experts'
        ]
    }
];

const Services = () => {

    const [selectedCategory, setSelectedCategory] = useState('startBusiness');
    const [serviceData, setServiceData] = useState(StartBusinessData);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);

        switch (category) {
            case 'startBusiness':
                setServiceData(StartBusinessData);
                break;
            case 'registration':
                setServiceData(RegistrationData);
                break;
            case 'trademark':
                setServiceData(TrademarkData);
                break;
            case 'incomeTax':
                setServiceData(IncomeTaxData);
                break;
            default:
                setServiceData(StartBusinessData); // Default to Start Business data
                break;
        }
    };

    const linkMapping = {
        'Private Limited Company Registration': '/Private_Limited',
        'Limited Liability Partnership Registration': '/Limited_Liability_Partnership_Registration',
        'Section NPO Registration': '/Section_NPO',
        'GST Registration': '/GST_Registration',
        'FSSAI Registration': '/FSSAI_Registration',
        'ISO Certificate': '/ISO_Certification',
        'Import Export Code (IEC)': '/IEC_Code_Registration',
        'Trademark Registration': '/Trademark_Registration',
        'Copyright Registration': '/Copyright_Registration',
        'Design Registration': '/Design_Registration',
        'Income Tax Return': '/Income_Tax_Return',
        'GST Return Filing': '/GST_Return',
        'TDS Return': '/TDS_Return',
        'Income Tax Notice': '/Income_Tax_Notice'
    };

    return (
        <>
            <section className="servicesSection">
                <fieldset className="servicesCardContainer">
                    <legend><span>O</span>ur <span>S</span>ervices</legend>

                    <div className="serviceCatagories">
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'startBusiness' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('startBusiness')}
                        >
                            Start Business
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'registration' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('registration')}
                        >
                            Registration
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'trademark' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('trademark')}
                        >
                            Trademark/IP
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'incomeTax' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('incomeTax')}
                        >
                            Income Tax/GST
                        </div>
                    </div>

                    <div className="serviceCards">  
                        {serviceData.map((service, index) => (
                            <div key={index} className="singleServiceCard">
                                <h3>{service.title}</h3>
                                <div className="servicePricing">
                                    <p>Starting</p>
                                    <span>{service.price}</span>
                                </div>
                                <ul>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}> <VscDebugBreakpointLog /> {feature}</li>
                                    ))}
                                </ul>
                                <div className="learn_more">
                                    <Link to={linkMapping[service.title] || '#'}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </section>
        </>
    );
};

export default Services;
