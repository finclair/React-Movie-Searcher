# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.provider 'virtualbox' do |v|
    v.memory = 2048
  end

  config.vm.network "forwarded_port", guest: 8080, host: 8080

  config.vm.synced_folder ".", "/vagrant"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
  end
end
