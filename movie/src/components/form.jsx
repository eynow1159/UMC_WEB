import * as F from "../style/components/form.js";

// 여기서 id는 inputdata를 의미함
const Form = ({ id_type, id_placeholder, id_register, id_value, isSubmitted, id_errors }) => {
    
    return (
        <F.InputDiv>
            <F.InputText 
                type={id_type} 
                placeholder={id_placeholder} 
                maxLength={11} 
                {...id_register}
                
                $border={
                (id_value || isSubmitted) && id_errors 
                    ? '2px solid #e73e3e' 
                    : '2px solid black'
                }
            />
            {(id_value || isSubmitted) && 
                <F.ValidationIcon 
                    src={ id_errors 
                        ? 'x' 
                        : 'o'
                    }
                />
            }
        </F.InputDiv>
    );
};

export default Form;