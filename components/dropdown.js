import SearchableDropdown from 'react-native-searchable-dropdown';

// Dropdown menu with unique design supporting large lists
export default function Dropdown({items, state, placeholder, setState}) {
    const items_with_default = items//.concat([state.toString()])
    return (
        <SearchableDropdown
            onTextChange={text => setState(placeholder)}
            onItemSelect={item => setState(item.name)}
            containerStyle={{ 
                padding: 5,
                width: '90%',
            }}
            textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#ccc',
                backgroundColor: state.toString() === placeholder ? '#F8F4F3' : '#FFF',
            }}
            itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#FAF9F8',
                borderWidth: 1,
            }}
            itemTextStyle={{
                color: '#888',
            }}
            itemsContainerStyle={{
                //items container style you can pass maxHeight
                //to restrict the items dropdown hieght
                maxHeight: '60%',
            }}
            items={items_with_default}
            defaultIndex={items.length}
            placeholder={state}
            placeholderTextColor={state.toString() === placeholder ? '#888' : '#222'}
            resetValue={false}
            //To remove the underline from the android input
            underlineColorAndroid="transparent"
        />
    );
}
