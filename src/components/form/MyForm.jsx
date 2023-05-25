import styles from './MyForm.module.scss';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import MyCheckbox from '../UI/MyCheckbox/MyCheckbox';
import MyTextArea from '../UI/MyTextArea/MyTextArea';
import { useState, useRef } from 'react';

const MyForm = () => {
  const [isShow, setIsShow] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    text: '',
    politic: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = true;
    if (isFormValid) {
      fetch(
        'https://send.pageclip.co/o8X7lePVhEG17YAB0uphzbMIhVWU5BxT/portfolio-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log('yes');
            setTimeout(() => {
              setIsShow((prev) => !prev);
            }, 2000);
            setIsShow((prev) => !prev);
            setFormData({
              // обновляем значения полей формы
              email: '',
              text: '',
              politic: false,
            });
            formRef.current.reset();
          } else {
            console.error('Failed to send message');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div id='myform' className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.form__title}>Связаться</h2>
        <div className={styles.form__content}>
          <div className={styles.form__content_left}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <MyInput
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='E-mail'
                required></MyInput>
              <MyTextArea
                type='text'
                name='text'
                value={formData.text}
                onChange={handleChange}
                placeholder='Предложить...'
                required></MyTextArea>
              <MyCheckbox
                id='politicDef'
                name='politic'
                defaultValue={formData.politic}
                onChange={handleChange}
                required>
                Политики конфиденциальности
              </MyCheckbox>

              <MyButton type='submit'>
                <span>Отправить</span>
              </MyButton>
              {isShow ? (
                <div className={styles.notification}>Сообщение отправлено</div>
              ) : (
                <div></div>
              )}
            </form>
          </div>
          <div className={styles.form__content_right}>
            <img
              className={styles.form__image}
              src='assets/form.svg'
              alt='form-illustration'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
